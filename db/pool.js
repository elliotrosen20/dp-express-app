require('dotenv').config(); // Load environment variables

const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DB_HOST,      // Host from .env file
  user: process.env.DB_USER,      // User from .env file
  database: process.env.DB_NAME,  // Database from .env file
  password: process.env.DB_PASSWORD,  // Password from .env file
  port: process.env.DB_PORT       // Port from .env file
});