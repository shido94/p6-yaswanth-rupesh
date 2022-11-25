const arr = [1, 3, 2, 4];

function nextLargerElement(arr) {
	const stack = [];

	// iterating over the array
	for (let index = 0; index < arr.length; index++) {
		while (
			stack.length > 0 &&
			stack[stack.length - 1]['value'] < arr[index]
		) {
			// updating the array as per the stack top
			const current = stack.pop();
			arr[current['ind']] = arr[index];
		}
		// pushing values to stack
		stack.push({ value: arr[index], ind: index });
	}

	// updating the array as per the stack top
	while (stack.length > 0) {
		const current = stack.pop();
		arr[current['ind']] = -1;
	}
	return arr;
}

// Function call
console.log(nextLargerElement(arr));
