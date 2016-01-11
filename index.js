'use strict';
var got = require('got');

module.exports = function (str) {
	if (!str) {
		throw new Error('Username is required');
	}

	return got('https://api.imgur.com/3/account/' + str, {
		json: true,
		headers: {authorization: 'Client-ID cb65642c0a7a7a8'}
	}).then(function (res) {
		return res.body.data;
	});
};
