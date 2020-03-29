const indexModel = require("../models/index");
require('dotenv').config()
const url = require('url');

var apiurl = process.env.APIURL
var topQty = process.env.TOPQTY

const controller = {
	index: function(req, res){
		indexModel.index(apiurl + 'markets')
		.then(response => {
			// app.set('headerItems', response)
			res.render('pages/index', {markets:response});
		})
		.catch(error => {
			res.send(error)
		})
	},
	topMarkets: function(req, res){
		indexModel.index(apiurl + 'markets?quantity=' + topQty)
		.then(response => {
			res.render('pages/top-markets', {markets:response, topQty});
		})
		.catch(error => {
			res.send(error)
		})
	},
	marketDetails: function(req, res){
		const market = req.path.split('/').pop();
		indexModel.index(apiurl + '/search?target=' + market)
		.then(response => {
			res.render('pages/market-detail', {market:response});
		})
		.catch(error => {
			res.send(error)
		})
	},
	submitSearch: function(req, res){
		let searchInput = req.body.searchTerm;
		if(searchInput){
			// searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
			searchInput = searchInput.toUpperCase();
			res.redirect('/results?term=' + searchInput);
		}
	},
	getResults: function(req, res){
		indexModel.index(apiurl + 'search?target=' + req.query['term'])
		.then(response => {
			res.render('pages/search-results', {results:response});
		})
		.catch(error => {
			res.send(error)
		})
	}
}
https://fake-stock-eye.herokuapp.com/history?symbol=BTC

module.exports = controller;