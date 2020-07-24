// Set up MySQL connection.
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Gemma2020",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "	e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ktdml7ah1m87hmvh",
    password: "fpz2kxhbegv9bp3j",
    database: "ih6qoa0f7ar44s7i"
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;