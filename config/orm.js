//connection orm
const connection = require('./connection');

///Loop creates array of question marks for queries. Credit to GT Bootcamp repo.
function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax Credit to GT Bootcamp repo.
function objToSql(ob) {
  let arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  };
  // translate array of strings to a single comma-separated string
  return arr.toString();
};

const orm = {
  ///select all burgers
  selectAll: (table, cb) => {
    const burgQuery = 'SELECT * FROM ??';
    connection.query(burgQuery, [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  ///insert new burger
  insertBurger: (table, column, value, cb) => {
    let burgQuery = 'INSERT INTO (??) (??) VALUES(?)';
    console.log(burgQuery);
    connection.query(burgQuery, [table, column, value], (err, result) => {
      if (err) throw err
      cb(result);
    });
  },
  updateBurger:(table, column, value, burgerStatus, cb) => {
    let burgQuery = 'UPDATE (??) SET (??) = (?) WHERE burgerStatus = (?)';
    console.log(burgQuery);
    connection.query(burgQuery, [table, column, value, burgerStatus], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};
//export orm to burger.js
module.exports = orm;