const Pool = requre("pg").Pool;

const pool = new Pool({
  user:"postgres",
  password:"12345678",
  host: "localhost",
  database: "perntodo",
})

module.exports = pool;