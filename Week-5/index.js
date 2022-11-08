const arr = [-2, -3, -10];

function findMaxSumContiguousSubarray(arr) {
	let max = arr[0];

	let currentSum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		currentSum = currentSum + arr[i];

		/**
		 * If current sum if greater than max, set max to currentSum
		 */

		if (currentSum > max) max = currentSum;

		/**
		 * If the value of current sum is negative, set the current sum to 0
		 */
		if (currentSum < 0) {
			currentSum = 0;
		}
	}

	return max;
}

console.log(findMaxSumContiguousSubarray(arr));
