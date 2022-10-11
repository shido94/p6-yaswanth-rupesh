//Given reducer method:
function add(a, b) {
	return a + b;
}

// Create a memoize function
const memoize = (fn) => {
	const cache = new Map();
	return function (...args) {
		let key = args.toString();

		/**
		 * Check if we have already passed the same arguments
		 * If yes, return value
		 */
		if (cache.has(key)) {
			return cache.get(key);
		}

		/**
		 * User reduce method to get total
		 */
		let total = args.reduce((acc, current) => fn(acc, current), 0);

		/**
		 * and set the total in cache with the key
		 */
		cache.set(key, total);
		return cache.get(key);
	};
};

const memoizeAdd = memoize(add);

console.time();
memoizeAdd(100, 200); //returns 200
memoizeAdd(100); //returns 100
memoizeAdd(100, 200); //returns 300
memoizeAdd(100, 100, 200, 300); //returns 200 without computing
console.timeEnd();
