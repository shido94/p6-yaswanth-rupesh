const arr = [0, 1, 2, 0, 0, 0, 2, 0, 2, 2, 1, 1, 1, 1];

const sortArr = function (arr) {
	let zeros = 0;
	let ones = 0;
	let twos = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			zeros += 1;
		}
		if (arr[i] == 1) {
			ones += 1;
		}
		if (arr[i] == 2) {
			twos += 1;
		}
	}

	for (let i = 0; i < zeros + ones + twos; i++) {
		if (i < zeros) {
			arr[i] = 0;
		}
		if (i >= zeros && i < zeros + ones) {
			arr[i] = 1;
		}

		if (i >= zeros + ones && i < zeros + ones + twos) {
			arr[i] = 2;
		}
	}

	return arr;
};

console.log(sortArr(arr));
