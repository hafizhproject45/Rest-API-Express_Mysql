const mysql = require("mysql2");
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME;
const dbName = process.env.DB_NAME;

const dbPool = mysql.createPool({
  host: dbHost,
  user: dbUsername,
  database: dbName,
});

module.exports = dbPool.promise();
