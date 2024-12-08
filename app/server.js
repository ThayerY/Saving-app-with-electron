
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from 'url';

// import savingsRoutes from "./routes/savings/index.js";
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // To handle __dirname in ES modules:
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Serve static files from the "public" directory
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../public')));


// // MongoDB Connection
// const MONGODB_URI = process.env.MONGODB_URI;
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit server on connection failure
//   });

// // Routes
// app.use("/api/savings", savingsRoutes);

// // If you want all unknown routes to serve your index.html (for a single-page app):
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from 'url';

// import savingsRoutes from "./routes/savings/index.js";


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Handle __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Serve static files from the "public" directory, which is one level up from "app"
// app.use(express.static(path.join(__dirname, '../public')));

// // MongoDB Connection
// const MONGODB_URI = process.env.MONGODB_URI;
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1);
//   });

// // Routes
// app.use("/api/savings", savingsRoutes);

// // For Single-Page Applications, serve index.html for any unknown route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
//   // console.log(`Connected to MongoDB`)
// });




//**************************************************************************
//*************************************************************************


// // app/server.js

// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load environment variables from .env file
// dotenv.config({ path: path.join(__dirname, '..', '.env') });

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Import routes
// import savingsRoutes from './routes/savings/index.js';
// app.use('/api/savings', savingsRoutes);

// // Connect to MongoDB
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Start the server after successful DB connection
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   });

// // Optional: Serve static files if needed (e.g., for frontend testing)
// app.use(express.static(path.join(__dirname, '..', 'public')));








//**************************************************************************
//*************************************************************************




// // app/server.js

// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // // Load environment variables from .env file
// // dotenv.config({ path: path.join(__dirname, '..', '.env') });

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Import routes
// import savingsRoutes from './routes/savings/index.js';
// app.use('/api/savings', savingsRoutes);

// // Connect to MongoDB
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Start the server after successful DB connection
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   });

// // Optional: Serve static files if needed (e.g., for frontend testing)
// app.use(express.static(path.join(__dirname, '..', 'public')));



//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------


// app/server.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
import savingsRoutes from './routes/savings/index.js';
app.use('/api/savings', savingsRoutes);

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  });

// Optional: Serve static files if needed (e.g., for frontend testing)
app.use(express.static(path.join(__dirname, '..', 'public')));
