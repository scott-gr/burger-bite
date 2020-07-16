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
    const burgQuery = 'SELECT * FROM ' + table+ ';';
    connection.query(burgQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  ///insert new burger
  insertBurger: (table, column, value, cb) => {
    let burgQuery = 'INSERT INTO ' + table;
    burgQuery += ' (';
    burgQuery += column.toString();
    burgQuery += ') ';
    burgQuery += 'VALUES (';
    burgQuery += printQuestionMarks(value.length);
    burgQuery += ') ';
    console.log(burgQuery);
    connection.query(burgQuery, value, (err, result => {
      if (err) {
        throw err;
      }
      cb(result);
    }))
  },
  updateBurger:(table, objColumnValues, burgerStatus, cb) => {
    let burgQuery = 'UPDATE ' + table;
    burgQuery += ' SET';
    burgQuery += objToSql(objColumnValues);
    burgQuery += ' WHERE';
    burgQuery += burgerStatus;
    console.log(burgQuery);
    connection.query(burgQuery, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
//export orm to burger.js
module.exports = orm;