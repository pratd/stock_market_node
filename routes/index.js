var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// top ejs file
router.get('/top' , (req, res, next) => {
  res.render('top');
});

// main ejs file
router.get('/main' , (req, res, next) => {
  res.render('main');
});

// 

module.exports = router;
