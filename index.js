'use strict';
//var condenseKeys = require('condense-keys');
var got = require('got');

module.exports = function (username, cb) {
	if (!username || typeof username === 'function') {
		throw new Error('Username is required');
	}

	got.get('https://api.imgur.com/3/account/' + username, {
		json: true,
		headers: {authorization: 'Client-ID cb65642c0a7a7a8'}
	}, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res.data);
	});
};
