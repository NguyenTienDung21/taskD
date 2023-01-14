const { Pool } = require("pg");


const pool = new Pool({
  user: 'dbadmin',
  database: 'applicationdb',
  password: 'database1407',
  port: 5432,
  host: "postgresql57db.csspkrtyfmqm.us-east-1.rds.amazonaws.com",
});

module.exports = { pool };