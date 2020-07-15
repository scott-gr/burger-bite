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
//insert burger
router.post('/api/burgers', (req, res) => {
  burger.insertBurger('burger_name', req.body.name, result => {
    res.json({ id: result.insertId });
    console.log('Added ${req.body.name}! Time to eat')
  })
});


//updateBurger
router.put('/api/burgers/:id', (req, res) => {
  const id = req.params.id;
  console.log('You devoured burger ${id}')
  burger.updateBurger('devoured', req.body.devoured, id, result => {
    if (result.changedRows == 0){
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    };
  });
});

module.exports = router;