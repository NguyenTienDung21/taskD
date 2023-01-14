const { pool } = require("./pool");

async function retrieveData() {
  try {
    const res = await pool.query("SELECT * FROM my_number");
    return res.rows
  } catch (error) {
    console.error(error);
  }
}
module.exports = { retrieveData }