// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  *
//  * This attempts an HTTP GET every second until it receives a 200 response.
//  * Once a 200 response is detected, it invokes the callback (createWindow).
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         // Server is ready, call the callback function
//         callback();
//       } else {
//         // Not ready, try again in 1 second
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       // Connection refused or another error, wait and try again
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the browser window and loads the frontend from the backend server.
//  * This should only be called once the backend is confirmed running.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // Additional browser window features can be configured here
//     webPreferences: {
//       nodeIntegration: false, // Keep disabled for security unless needed
//       contextIsolation: true, // Recommended for security
//       // preload: path.join(__dirname, 'preload.js'), // If you have a preload script
//     }
//   });

//   // Now that the server is ready, load the frontend
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// app.whenReady().then(() => {
//   // Determine the path to server.js in the packaged environment.
//   // After building, 'server.js' will be located in resources/app/server.js due to extraResources.
//   const serverScriptPath = path.join(process.resourcesPath, 'app', 'server.js');

//   // Spawn the backend server process using the same Node binary that Electron uses.
//   // stdio: 'inherit' allows you to see server logs in the console from which you started the app.
//   serverProcess = spawn(process.execPath, [serverScriptPath], {
//     stdio: 'inherit',
//     env: { ...process.env }
//   });

//   // Once the server is spawned, start polling until it responds with a 200 status
//   waitForServer(5000, createWindow);
// });

// app.on('window-all-closed', () => {
//   // Quit the app entirely on non-macOS systems when all windows are closed
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('will-quit', () => {
//   // Kill the backend server when the Electron app quits, preventing orphaned processes
//   if (serverProcess) {
//     serverProcess.kill();
//   }
// });

// app.on('activate', () => {
//   // On macOS, if the app is re-activated and no window is open, recreate the window
//   if (mainWindow === null) {
//     createWindow();
//   }
// });













// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  *
//  * This attempts an HTTP GET every second until it receives a 200 response.
//  * Once a 200 response is detected, it invokes the callback (createWindow).
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         // Server is ready, call the callback function
//         callback();
//       } else {
//         // Not ready, try again in 1 second
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       // Connection refused or another error, wait and try again
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the browser window and loads the frontend from the backend server.
//  * This should only be called once the backend is confirmed running.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // Additional browser window features can be configured here
//     webPreferences: {
//       nodeIntegration: false, // Keep disabled for security unless needed
//       contextIsolation: true, // Recommended for security
//       // preload: path.join(__dirname, 'preload.js'), // If you have a preload script
//     }
//   });

//   // Now that the server is ready, load the frontend
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// app.whenReady().then(() => {
//   // Determine the path to server.js in the packaged environment.
//   // After building, 'server.js' will be located in resources/app/server.js due to extraResources.
//   const serverScriptPath = path.join(process.resourcesPath, 'app', 'server.js');

//   // Spawn the backend server process using the same Node binary that Electron uses.
//   // stdio: 'inherit' allows you to see server logs in the console from which you started the app.
//   serverProcess = spawn(process.execPath, [serverScriptPath], {
//     stdio: 'inherit',
//     env: { ...process.env }
//   });

//   // Once the server is spawned, start polling until it responds with a 200 status
//   waitForServer(5000, createWindow);
// });

// app.on('window-all-closed', () => {
//   // Quit the app entirely on non-macOS systems when all windows are closed
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('will-quit', () => {
//   // Kill the backend server when the Electron app quits, preventing orphaned processes
//   if (serverProcess) {
//     serverProcess.kill();
//   }
// });

// app.on('activate', () => {
//   // On macOS, if the app is re-activated and no window is open, recreate the window
//   if (mainWindow === null) {
//     createWindow();
//   }
// });




//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------





// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname in ESM environments
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  *
//  * - Tries to GET the URL every 1 second.
//  * - If a 200 response is received, the provided callback is executed.
//  *
//  * @param {number} port - The port on which the backend server is expected to listen.
//  * @param {Function} callback - The function to call once the server is ready.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         // Server is ready, call the callback (createWindow)
//         callback();
//       } else {
//         // Not ready yet, try again in 1 second
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       // Connection refused or other error, wait 1 second and try again
//       setTimeout(attempt, 1000);
//     });
//   };

//   attempt();
// }

// /**
//  * Creates the main application window and loads the frontend from the running server.
//  *
//  * - Called after we confirm the backend is up and responding.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // Configure any additional browser window features here
//     webPreferences: {
//       nodeIntegration: false,   // Keep this false for security if not needed
//       contextIsolation: true,   // Helps protect against malicious scripts
//       // preload: path.join(__dirname, 'preload.js'), // Example if you have a preload script
//     }
//   });

//   // Now that the backend is confirmed running on localhost:5000, load it
//   mainWindow.loadURL('http://localhost:5000');

//   // If the user closes the window, clear our reference
//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// app.whenReady().then(() => {
//   // Spawn the backend server as a separate Node process.
//   //
//   // Using process.execPath ensures that the same Node binary used by Electron is used here.
//   // path.join(__dirname, 'app', 'server.js') should match your actual server file location.
//   // stdio: 'inherit' means server logs show up in the parent process's console.
//   serverProcess = spawn(process.execPath, [path.join(__dirname, 'app', 'server.js')], {
//     stdio: 'inherit',
//     env: { ...process.env } // Inherit environment variables, if any are needed by your server
//   });

//   // After starting the server, check repeatedly until it responds before creating the window.
//   waitForServer(5000, createWindow);
// });

// app.on('window-all-closed', () => {
//   // On non-macOS systems, close the app when all windows are closed.
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('will-quit', () => {
//   // Make sure to kill the server process if Electron is quitting
//   // This prevents leaving orphaned backend processes running in the background.
//   if (serverProcess) {
//     serverProcess.kill();
//   }
// });

// app.on('activate', () => {
//   // On macOS, if no window is open and the app is reactivated, create a new window.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });










//-------------------------------------------------------------------------------
//--------------------------------------------------------------------------------



// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Wait until the server at http://localhost:5000 is ready.
//  * This function periodically tries to connect and checks for a successful response.
//  * Once a 200 response is received, it calls the callback.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         callback();
//       } else {
//         // If not 200, try again
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       // If there's an error (e.g., connection refused), wait and try again
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Create the browser window.
//  * Loads the app from the locally running server at http://localhost:5000 after it's ready.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // If you need advanced configs, put them here
//     webPreferences: {
//       nodeIntegration: false,
//       contextIsolation: true,
//       // If you need preload scripts, etc., specify them here
//     }
//   });

//   // Load the URL from the backend server now that we know it's responding
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// app.whenReady().then(() => {
//   // Start the backend server process
//   // Adjust the path if your server.js is elsewhere
//   serverProcess = spawn(process.execPath, [path.join(__dirname, 'app', 'server.js')], {
//     stdio: 'inherit',
//     env: { ...process.env }
//   });

//   // Once the server is spawned, start checking if it's up
//   // When it responds with status 200, create the window
//   waitForServer(5000, createWindow);
// });

// app.on('window-all-closed', () => {
//   // On non-macOS platforms, quit the app when all windows are closed
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('will-quit', () => {
//   // Ensure the server process is killed when Electron quits
//   if (serverProcess) {
//     serverProcess.kill();
//   }
// });

// app.on('activate', () => {
//   // On macOS, if the app is reactivated and no window is open, create one
//   if (mainWindow === null) {
//     createWindow();
//   }
// });



//**************************************************************************


// main.js

// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  * Once a 200 response is received, it calls the callback function.
//  * @param {number} port - The port on which the backend server is expected to listen.
//  * @param {Function} callback - The function to call once the server is ready.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         console.log('Server is up and running.');
//         callback();
//       } else {
//         console.log(`Server responded with status code: ${res.statusCode}. Retrying in 1 second...`);
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       console.log('Server not ready yet. Retrying in 1 second...');
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the main application window and loads the frontend from the backend server.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: false,   // Disable Node integration for security
//       contextIsolation: true,   // Enable context isolation for security
//       // preload: path.join(__dirname, 'preload.js'), // Uncomment if you have a preload script
//     }
//   });

//   // Load the frontend from the backend server
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// // Enforce single instance to prevent multiple Electron processes
// const gotTheLock = app.requestSingleInstanceLock();

// if (!gotTheLock) {
//   // If another instance is already running, quit this one
//   app.quit();
// } else {
//   // Listen for second-instance event to focus the existing window
//   app.on('second-instance', () => {
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore();
//       mainWindow.focus();
//     }
//   });

//   // Main application code within the single instance block
//   app.whenReady().then(() => {
//     // Determine the path to server.js in the packaged environment
//     const serverScriptPath = path.join(process.resourcesPath, 'app', 'server.js');

//     console.log(`Spawning server from: ${serverScriptPath}`);

//     // Spawn the backend server process using the same Node.js instance as Electron
//     serverProcess = spawn(process.execPath, [serverScriptPath], {
//       stdio: 'inherit', // Inherit stdio so server logs appear in the Electron console
//       env: { ...process.env } // Pass environment variables to the server
//     });

//     // Wait for the backend server to be ready before creating the window
//     waitForServer(5000, createWindow);
//   });

//   app.on('window-all-closed', () => {
//     // Quit the application on non-macOS platforms when all windows are closed
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });

//   app.on('will-quit', () => {
//     // Ensure the backend server process is killed when Electron quits
//     if (serverProcess) {
//       console.log('Killing backend server process...');
//       serverProcess.kill();
//     }
//   });

//   app.on('activate', () => {
//     // On macOS, re-create a window when the dock icon is clicked and no other windows are open
//     if (mainWindow === null) {
//       createWindow();
//     }
//   });
// }





//*************************************************************************
//**************************************************************************

// // main.js

// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  * Once a 200 response is received, it calls the callback function.
//  * @param {number} port - The port on which the backend server is expected to listen.
//  * @param {Function} callback - The function to call once the server is ready.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         console.log('Server is up and running.');
//         callback();
//       } else {
//         console.log(`Server responded with status code: ${res.statusCode}. Retrying in 1 second...`);
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       console.log('Server not ready yet. Retrying in 1 second...');
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the main application window and loads the frontend from the backend server.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: false,   // Disable Node integration for security
//       contextIsolation: true,   // Enable context isolation for security
//       // preload: path.join(__dirname, 'preload.js'), // Uncomment if you have a preload script
//     }
//   });

//   // Load the frontend from the backend server
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// // Enforce single instance to prevent multiple Electron processes
// const gotTheLock = app.requestSingleInstanceLock();

// if (!gotTheLock) {
//   // If another instance is already running, quit this one
//   app.quit();
// } else {
//   // Listen for second-instance event to focus the existing window
//   app.on('second-instance', () => {
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore();
//       mainWindow.focus();
//     }
//   });

//   // Main application code within the single instance block
//   app.whenReady().then(() => {
//     // Determine the path to server.js in the packaged environment
//     const serverScriptPath = path.join(process.resourcesPath, 'app', 'server.js');

//     console.log(`Spawning server from: ${serverScriptPath}`);

//     // Spawn the backend server process using the same Node.js instance as Electron
//     serverProcess = spawn(process.execPath, [serverScriptPath], {
//       stdio: 'inherit', // Inherit stdio so server logs appear in the Electron console
//       env: { ...process.env } // Pass environment variables to the server
//     });

//     // Wait for the backend server to be ready before creating the window
//     waitForServer(5000, createWindow);
//   });

//   app.on('window-all-closed', () => {
//     // Quit the application on non-macOS platforms when all windows are closed
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });

//   app.on('will-quit', () => {
//     // Ensure the backend server process is killed when Electron quits
//     if (serverProcess) {
//       console.log('Killing backend server process...');
//       serverProcess.kill();
//     }
//   });

//   app.on('activate', () => {
//     // On macOS, re-create a window when the dock icon is clicked and no other windows are open
//     if (mainWindow === null) {
//       createWindow();
//     }
//   });
// }




// ********************************************************************************
//**************************************************************************


// // main.js

// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname and __filename for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  * Once a 200 response is received, it calls the callback function.
//  * @param {number} port - The port on which the backend server is expected to listen.
//  * @param {Function} callback - The function to call once the server is ready.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         console.log('Server is up and running.');
//         callback();
//       } else {
//         console.log(`Server responded with status code: ${res.statusCode}. Retrying in 1 second...`);
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', () => {
//       console.log('Server not ready yet. Retrying in 1 second...');
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the main application window and loads the frontend from the backend server.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: false,   // Disable Node integration for security
//       contextIsolation: true,   // Enable context isolation for security
//       // preload: path.join(__dirname, 'preload.js'), // Uncomment if you have a preload script
//     }
//   });

//   // Load the frontend from the backend server
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// /**
//  * Ensures that only a single instance of the application is running.
//  */
// const gotTheLock = app.requestSingleInstanceLock();

// if (!gotTheLock) {
//   // If another instance is already running, quit this one
//   app.quit();
// } else {
//   // Listen for second-instance event to focus the existing window
//   app.on('second-instance', () => {
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore();
//       mainWindow.focus();
//     }
//   });

//   // Main application code within the single instance block
//   app.whenReady().then(() => {
//     // Determine if the app is in development mode
//     const isDev = !app.isPackaged;

//     // Determine the path to server.js based on the environment
//     const serverScriptPath = isDev
//       ? path.join(__dirname, 'app', 'server.js') // Development path
//       : path.join(process.resourcesPath, 'app', 'server.js'); // Production path

//     console.log(`Spawning server from: ${serverScriptPath}`);

//     // Spawn the backend server process using the same Node.js instance as Electron
//     serverProcess = spawn(process.execPath, [serverScriptPath], {
//       stdio: 'inherit', // Inherit stdio so server logs appear in the Electron console
//       env: { ...process.env } // Pass environment variables to the server
//     });

//     // Wait for the backend server to be ready before creating the window
//     waitForServer(5000, createWindow);
//   });

//   app.on('window-all-closed', () => {
//     // Quit the application on non-macOS platforms when all windows are closed
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });

//   app.on('will-quit', () => {
//     // Ensure the backend server process is killed when Electron quits
//     if (serverProcess) {
//       console.log('Killing backend server process...');
//       serverProcess.kill();
//     }
//   });

//   app.on('activate', () => {
//     // On macOS, re-create a window when the dock icon is clicked and no other windows are open
//     if (mainWindow === null) {
//       createWindow();
//     }
//   });
// }





//**************************************************************************
//**************************************************************************


// // main.js

// import { app, BrowserWindow } from 'electron';
// import { spawn } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import http from 'http';

// // Resolve __dirname and __filename for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// let mainWindow;
// let serverProcess;

// /**
//  * Periodically checks if the server at http://localhost:5000 is running.
//  * Once a 200 response is received, it calls the callback function.
//  * @param {number} port - The port on which the backend server is expected to listen.
//  * @param {Function} callback - The function to call once the server is ready.
//  */
// function waitForServer(port, callback) {
//   const attempt = () => {
//     http.get(`http://localhost:${port}`, (res) => {
//       if (res.statusCode === 200) {
//         console.log('Server is up and running.');
//         callback();
//       } else {
//         console.log(`Server responded with status code: ${res.statusCode}. Retrying in 1 second...`);
//         setTimeout(attempt, 1000);
//       }
//     }).on('error', (err) => {
//       console.log(`Error connecting to server: ${err.message}. Retrying in 1 second...`);
//       setTimeout(attempt, 1000);
//     });
//   };
//   attempt();
// }

// /**
//  * Creates the main application window and loads the frontend from the backend server.
//  */
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: false,   // Disable Node integration for security
//       contextIsolation: true,   // Enable context isolation for security
//       // preload: path.join(__dirname, 'preload.js'), // Uncomment if you have a preload script
//     }
//   });

//   // Load the frontend from the backend server
//   mainWindow.loadURL('http://localhost:5000');

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }

// // Enforce single instance to prevent multiple Electron processes
// const gotTheLock = app.requestSingleInstanceLock();

// if (!gotTheLock) {
//   // If another instance is already running, quit this one
//   app.quit();
// } else {
//   // Listen for second-instance event to focus the existing window
//   app.on('second-instance', () => {
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore();
//       mainWindow.focus();
//     }
//   });

//   // Main application code within the single instance block
//   app.whenReady().then(() => {
//     // Determine if the app is in development mode
//     const isDev = !app.isPackaged;

//     // Determine the path to server.js based on the environment
//     const serverScriptPath = isDev
//       ? path.join(__dirname, 'app', 'server.js') // Development path
//       : path.join(process.resourcesPath, 'app', 'server.js'); // Production path

//     console.log(`Spawning server from: ${serverScriptPath}`);

//     // Spawn the backend server process using the same Node.js instance as Electron
//     serverProcess = spawn(process.execPath, [serverScriptPath], {
//       stdio: 'inherit', // Inherit stdio so server logs appear in the Electron console
//       env: { ...process.env } // Pass environment variables to the server
//     });

//     // Handle server spawn errors
//     serverProcess.on('error', (err) => {
//       console.error('Failed to start backend server:', err);
//       app.quit(); // Quit the app if the backend fails to start
//     });

//     serverProcess.on('exit', (code, signal) => {
//       console.log(`Backend server exited with code ${code} and signal ${signal}`);
//       app.quit(); // Quit the app if the backend server exits
//     });

//     // Wait for the backend server to be ready before creating the window
//     waitForServer(5000, createWindow);
//   });

//   app.on('window-all-closed', () => {
//     // Quit the application on non-macOS platforms when all windows are closed
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });

//   app.on('will-quit', () => {
//     // Ensure the backend server process is killed when Electron quits
//     if (serverProcess) {
//       console.log('Killing backend server process...');
//       serverProcess.kill();
//     }
//   });

//   app.on('activate', () => {
//     // On macOS, re-create a window when the dock icon is clicked and no other windows are open
//     if (mainWindow === null) {
//       createWindow();
//     }
//   });
// }





//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


// main.js
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

