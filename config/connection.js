// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Gemma2020",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to" + connection.database + "as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;