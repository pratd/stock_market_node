const indexModel = require("../models/index");
const url = require('url');

const controller = {
	index: function(req, res){
		indexModel.index('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => {
				res.render('index', {response});
				// res.json(response)
			})
			.catch(error => {
				res.send(error)
			})
	}
}

module.exports = controller;