var express = require('express');
var router = express.Router();
var {retrieveData } = require('../models/getNum')

/* GET home page. */
router.get('/', function(req, res, next) {
  retrieveData().then(data =>{
    res.render('index', { title: 'Show the number' , my_number: data[0].number});
  })
  

});

module.exports = router;
