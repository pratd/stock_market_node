const request = require('request');
require('dotenv').config()


const marketsForHeader = new Promise((resolve, reject) => {
	request(process.env.APIURL + 'marketDetails', { json: true }, (err, res, body) => {
		if (err) reject(err)
		resolve(body)
	});

})

module.exports = marketsForHeader;