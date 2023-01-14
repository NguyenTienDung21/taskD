
const {pool} = require('./models/pool')

async function createTable(){
    try {
        const res = await pool.query("CREATE TABLE my_number (number INT)");
        return res.rows
      } catch (error) {
        console.error(error);
      }
}

createTable()