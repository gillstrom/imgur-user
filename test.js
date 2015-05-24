'use strict';
var test = require('ava');
var imgurUser = require('./');

test('user', function (t) {
	t.plan(3);

	imgurUser('gillstrom', function (err, res) {
		t.assert(!err, err);
		t.assert(typeof res === 'object');
		t.assert(res.url === 'gillstrom');
	});
});
