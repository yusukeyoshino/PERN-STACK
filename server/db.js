const Pool = require("pg").Pool;
require('dotenv').config();
const password = process.env.PG_PASSWORD

const pool = new Pool({
  user:"postgres",
  password,
  host: "localhost",
  port:5432,
  database: "pernstack",
})

module.exports = pool;