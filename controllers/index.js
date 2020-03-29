const indexModel = require("../models/index");
require('dotenv').config()
const url = require('url');

var apiurl = process.env.APIURL;
var topQty = process.env.TOPQTY;

const controller = {
	index: function(req, res){
		if (req.url === '/?success=false') {
			req.app.get('success')
			req.app.set('success', false);
		}
		indexModel.index(apiurl + 'markets')
		.then(response => {
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
		});
	},
	marketDetails: function(req, res){
		const market = req.path.split('/').pop();
		indexModel.index(apiurl + 'search?target=' + market)
		.then(response => {
			res.render('pages/market-detail', {market:response});
		})
		.catch(error => {
			res.send(error);
		});
	},
	submitSearch: function(req, res){
		let searchInput = req.body.searchTerm;
		const letters = /^[A-Za-z]+$/;
		if(searchInput.match(letters)){
			// searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
			searchInput = searchInput.toUpperCase();
			res.redirect('/results?term=' + searchInput);
		}else{
			res.redirect('/?success=false');
		}
	},
	getResults: function(req, res){
		indexModel.index(apiurl + 'search?target=' + req.query['term'])
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