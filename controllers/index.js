const indexModel = require("../models/index");
require('dotenv').config()
const url = require('url');

var apiurl = process.env.APIURL
var topQty = process.env.TOPQTY

const controller = {
	index: function(req, res){
		indexModel.index(apiurl + 'marketDetails')
			.then(response => {
				res.locals.markets = response;
				res.render('pages/index', {markets:response});
			})
			.catch(error => {
				res.send(error)
			})
	},
	topMarkets: function(req, res){
		indexModel.index(apiurl + 'marketDetails?_sort=price&_order=desc&_limit=' + topQty)
			.then(response => {
				res.render('pages/top-markets', {markets:response, topQty});
			})
			.catch(error => {
				res.send(error)
			})
	},
	marketDetails: function(req, res){
		indexModel.index(apiurl + 'marketDetails?name=' + req.query['market'])
			.then(response => {
				res.render('pages/market-detail', {market:response});
			})
			.catch(error => {
				res.send(error)
			})
	}
}
https://fake-stock-eye.herokuapp.com/history?symbol=BTC

module.exports = controller;