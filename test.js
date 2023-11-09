import path from 'node:path';
import test from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import {
	delay,
	toPath,
} from './node.js';

test.serial('delay - seconds', async t => {
	const end = timeSpan();
	await delay({seconds: 0.1});
	t.true(inRange(end(), {start: 80, end: 120}), 'is delayed');
});

test.serial('delay - milliseconds', async t => {
	const end = timeSpan();
	await delay({milliseconds: 100});
	t.true(inRange(end(), {start: 80, end: 120}), 'is delayed');
});

test('toPath', t => {
	const fixture = './foo.js';
	t.is(toPath(new URL(fixture, import.meta.url)), path.resolve(fixture));
	t.is(toPath(fixture), fixture);
});
