var express = require('express');
var router = express.Router();
const indexController = require("../controllers/index")

// homepage that renders all of the markets
router.get('/', indexController.index);

// // top 5 markets
router.get('/top', indexController.topMarkets);

// // top 5 markets
router.get('/market', indexController.marketDetails);

// router.get('/markets?search=:term', )

module.exports = router;
