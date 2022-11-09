const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
	if (!matrix.length) {
		return [];
	}

	const result = [];
	const circle = (a, b) => {
		for (let i = a[1]; i <= b[1]; i++) {
			result.push(matrix[a[0]][i]);
		}
		for (let i = a[0] + 1; i <= b[0]; i++) {
			result.push(matrix[i][b[1]]);
		}
		if (a[0] >= b[0] || a[1] >= b[1]) {
			return;
		}
		for (let i = b[1] - 1; i >= a[1]; i--) {
			result.push(matrix[b[0]][i]);
		}
		for (let i = b[0] - 1; i > a[0]; i--) {
			result.push(matrix[i][a[0]]);
		}
	};
	let a = [0, 0];
	let b = [matrix.length - 1, matrix[matrix.length - 1].length - 1];
	while (a[0] <= b[0] && a[1] <= b[1]) {
		circle(a, b);
		a[0]++;
		a[1]++;
		b[0]--;
		b[1]--;
	}

	return result;
};

console.log(spiralOrder(arr));
