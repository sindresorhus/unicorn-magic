import {fileURLToPath} from 'node:url';

export function toPath(urlOrPath) {
	return urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}

export async function delay({seconds, milliseconds} = {}) {
	let duration;
	if (typeof seconds === 'number') {
		duration = seconds * 1000;
	} else if (typeof milliseconds === 'number') {
		duration = milliseconds;
	} else {
		throw new TypeError('Expected an object with either `seconds` or `milliseconds`.');
	}

	return new Promise(resolve => {
		setTimeout(resolve, duration);
	});
}
