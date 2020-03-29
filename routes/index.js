var express = require('express');
var router = express.Router();
const indexController = require("../controllers/index")


router.get('/', indexController.index);

router.get('/top', indexController.topMarkets);

router.get('/market/:symbol', indexController.marketDetails);

router.get('/history', indexController.getChartResults);

router.post('/search-form', indexController.submitSearch);

router.get('/results', indexController.getResults);

module.exports = router;
