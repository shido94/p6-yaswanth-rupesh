const arr = [-10, 20],
	B = 30;

const pairDiff = function (arr, diff) {
	const map = new Map();

	for (let num of arr) {
		if (map.has(num)) {
			return 1;
		} else {
			map.set(diff + num, num);
		}
	}

	return 0;
};

console.log(pairDiff(arr, B));
