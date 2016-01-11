import test from 'ava';
import m from './';

test('user', t => {
	m('gillstrom', function (err, res) {
		t.assert(!err, err);
		t.assert(typeof res === 'object');
		t.assert(res.url === 'gillstrom');
	});
});
