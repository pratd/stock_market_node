var express = require('express');
var router = express.Router();
const indexController = require("../controllers/index")


router.get('/', indexController.index);

router.get('/top', indexController.topMarkets);

router.get('/market', indexController.marketDetails);

router.post('/search-form', indexController.submitSearch)

router.get('/results', indexController.getResults)

module.exports = router;
