
const {pool} = require('./models/pool')

async function createTable(){
    try {
        const res2 = await pool.query("INSERT INTO my_number VALUES (9)");
        return res.rows
      } catch (error) {
        console.error(error);
      }
}

console.log(createTable())