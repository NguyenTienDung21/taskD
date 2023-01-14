const { Pool } = require("pg");

require('dotenv').config()

console.log(process.env.RDS_PASSWORD)
const pool = new Pool({
  user: process.env.RDS_USERNAME,
  database: process.env.RDS_DB_NAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  host: process.env.RDS_HOSTNAME,
});

module.exports = { pool };