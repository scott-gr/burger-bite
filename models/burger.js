const orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll: cb => {
    orm.selectAll('burgers', result => {
      cb(result);
    });
  },

  insertBurger: (columns, values, cb) => {
    orm.insertBurger('burgers', columns, values, result => {
      cb(result);
    });
  },

  updateBurger: (columns, values, id, cb) => {
    orm.updateBurger('burgers', columns, values, id, result =>{
      cb(result);
    });
  },
};

module.exports = burger;