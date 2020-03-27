const indexModel = require("../models/index");
require('dotenv').config()
const url = require('url');

var apiurl = process.env.APIURL;
var topQty = process.env.TOPQTY;

const controller = {
	index: function(req, res){
		indexModel.index(apiurl + 'marketDetails')
		.then(response => {
			// app.set('headerItems', response)
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
		});
	},
	marketDetails: function(req, res){
		indexModel.index(apiurl + 'marketDetails?name=' + req.query['market'])
		.then(response => {
			res.render('pages/market-detail', {market:response});
		})
		.catch(error => {
			res.send(error);
		});
	},
	submitSearch: function(req, res){
		let searchInput = req.body.searchTerm;
		searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
		res.redirect('/results?term=' + searchInput);
	},
	getResults: function(req, res){
		indexModel.index(apiurl + 'marketDetails?name=' + req.query['term'])
		.then(response => {
			res.render('pages/search-results', {results:response});
		})
		.catch(error => {
			res.send(error);
		});
	},
	getChartResults:function(req, res){
		indexModel.index(apiurl + 'history?symbol=' + req.query['market'])
		.then(response=>{
			//store the response for the charts
			
			var dataset = {};
			dataset.name = 'price chart';
			dataset.data = [];
			if (response.length>0){
				for(var i=0; i<response.length; i++ ){
					var obj={};
					obj.x= new Date(response[i].CloseTime);
					var picked = (({ Open, High, Low, Close }) => ({ Open, High, Low, Close }))(response[i]);
					obj.y=Object.values(picked);
					dataset.data.push(obj);
				}
			}else{
				var obj={};
				obj.x= 0;
				obj.y= [0,0,0,0];
				dataset.data.push(obj);
			}
			res.render('pages/chart',{chartData: JSON.stringify(dataset), market: response});
		})
		.catch(error=>{
			res.send(error);
		});
	}
};

module.exports = controller;