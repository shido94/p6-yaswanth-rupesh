const arr = [-1, 2, 1, -4],
	target = 1;

const threeSum = function (arr, target) {
	let ans = 0,
		closestDiff = Number.MAX_SAFE_INTEGER;

	arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1,
			right = arr.length - 1;

		while (left < right) {
			const currSum = arr[i] + arr[left] + arr[right];
			const currDiff = Math.abs(currSum - target);

			if (currDiff === 0) {
				return currSum;
			}

			if (currDiff < closestDiff) {
				ans = currSum;
				closestDiff = currDiff;
			}

			if (currSum > target) {
				right--;
			} else {
				left++;
			}
		}
	}

	return ans;
};

console.log(threeSum(arr, target));
