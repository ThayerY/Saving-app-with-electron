// main.js

import { app, BrowserWindow, dialog } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import fs from 'fs'; // Updated import statement

// Resolve __dirname and __filename for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let serverProcess;

/**
 * Periodically checks if the server at http://localhost:5000 is running.
 * Once a 200 response is received, it calls the callback function.
 * @param {number} port - The port on which the backend server is expected to listen.
 * @param {Function} callback - The function to call once the server is ready.
 */
function waitForServer(port, callback) {
  const attempt = () => {
    http.get(`http://localhost:${port}`, (res) => {
      if (res.statusCode === 200) {
        console.log('Server is up and running.');
        callback();
      } else {
        console.log(`Server responded with status code: ${res.statusCode}. Retrying in 1 second...`);
        setTimeout(attempt, 1000);
      }
    }).on('error', (err) => {
      console.log(`Error connecting to server: ${err.message}. Retrying in 1 second...`);
      setTimeout(attempt, 1000);
    });
  };
  attempt();
}

/**
 * Creates the main application window and loads the frontend from the backend server.
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,   // Disable Node integration for security
      contextIsolation: true,   // Enable context isolation for security
      // preload: path.join(__dirname, 'preload.js'), // Uncomment if you have a preload script
    }
  });

  // Load the frontend from the backend server
  mainWindow.loadURL('http://localhost:5000');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

/**
 * Ensures that only a single instance of the application is running.
 */
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  // If another instance is already running, quit this one
  app.quit();
} else {
  // Listen for second-instance event to focus the existing window
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  // Main application code within the single instance block
  app.whenReady().then(() => {
    // Determine if the app is in development mode
    const isDev = !app.isPackaged;

    // Determine the path to server.js based on the environment
    const serverScriptPath = isDev
      ? path.join(__dirname, 'app', 'server.js') // Development path
      : path.join(process.resourcesPath, 'app', 'server.js'); // Production path

    console.log(`Spawning server from: ${serverScriptPath}`);

    // Check if server.js exists before attempting to spawn
    if (!fs.existsSync(serverScriptPath)) {
      dialog.showErrorBox('Error', `Backend server not found at path: ${serverScriptPath}`);
      app.quit();
      return;
    }

    // Spawn the backend server process using the same Node.js instance as Electron
    serverProcess = spawn(process.execPath, [serverScriptPath], {
      stdio: 'inherit', // Inherit stdio so server logs appear in the Electron console
      env: { ...process.env } // Pass environment variables to the server
    });

    // Handle server spawn errors
    serverProcess.on('error', (err) => {
      console.error('Failed to start backend server:', err);
      dialog.showErrorBox('Error', `Failed to start backend server:\n${err.message}`);
      app.quit(); // Quit the app if the backend fails to start
    });

    serverProcess.on('exit', (code, signal) => {
      console.log(`Backend server exited with code ${code} and signal ${signal}`);
      // If the backend server exits unexpectedly, quit the Electron app
      if (code !== 0) {
        dialog.showErrorBox('Error', `Backend server exited unexpectedly with code ${code} and signal ${signal}`);
        app.quit();
      }
    });

    // Wait for the backend server to be ready before creating the window
    waitForServer(5000, createWindow);
  });

  app.on('window-all-closed', () => {
    // Quit the application on non-macOS platforms when all windows are closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('will-quit', () => {
    // Ensure the backend server process is killed when Electron quits
    if (serverProcess) {
      console.log('Killing backend server process...');
      serverProcess.kill();
    }
  });

  app.on('activate', () => {
    // On macOS, re-create a window when the dock icon is clicked and no other windows are open
    if (mainWindow === null) {
      createWindow();
    }
  });
}

