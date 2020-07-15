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
})


module.exports = router;