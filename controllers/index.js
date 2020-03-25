const indexModel = require("../models/index");
require('dotenv').config()
const url = require('url');

var apiurl = process.env.APIURL

const controller = {
	index: function(req, res){
		indexModel.index(apiurl)
			.then(response => {
				res.render('index', {response});
			})
			.catch(error => {
				res.send(error)
			})
	}
}

module.exports = controller;