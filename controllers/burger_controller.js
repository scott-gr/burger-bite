const express = require("express");
const burger = require('../models/burger');
//creating router
const router = express.Router();

//main page
router.get('/', (req, res) => {
  burger.selectAll(data => {
    const burgerObj = {
      burger: data
    };
    res.render('index', burgerObj);
  })
});

router.post('/api/burgers', (req, res) => {
  burger.insertBurger('burger_name', req.body.name, result => {
    res.json({ id: result.insertId });
    console.log('Added ${req.body.name}! Time to eat')
  })
});
// insertBurger

//updateBurger

module.exports = router;