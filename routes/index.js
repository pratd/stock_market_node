var express = require('express');
var router = express.Router();
const indexController = require("../controllers/index")

// homepage that renders all of the markets
router.get('/', indexController.index);

// // top 5 markets
// router.get('/top', );

// // top 5 markets
// router.get('/market/:stock', );

// router.get('/markets?search=:term', )

module.exports = router;
