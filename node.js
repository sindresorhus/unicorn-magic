import path from 'node:path';
import {fileURLToPath} from 'node:url';

export function toPath(urlOrPath) {
	return urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}

export function rootDirectory(pathInput) {
	return path.parse(toPath(pathInput)).root;
}

export function traversePathUp(startPath) {
	return {
		* [Symbol.iterator]() {
			let currentPath = path.resolve(toPath(startPath));
			let previousPath;

			while (previousPath !== currentPath) {
				yield currentPath;
				previousPath = currentPath;
				currentPath = path.resolve(currentPath, '..');
			}
		},
	};
}

export * from './default.js';
