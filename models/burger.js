const orm = require('../config/orm');

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertBurger: (columns, values, cb) => {
    orm.insertBurger('burgers', columns, values, function (res){
      cb(res);
    });
  },

  updateBurger: (objColumnValues, burgerStatus, cb) => {
    orm.updateBurger('burgers', objColumnValues, burgerStatus, function  (res){
      cb(res);
    });
  },
};

module.exports = burger;