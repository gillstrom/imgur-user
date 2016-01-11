import test from 'ava';
import m from './';

test(async t => {
	const data = await m('gillstrom');

	t.is(typeof data, 'object');
	t.is(data.url, 'gillstrom');
});
