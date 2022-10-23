const Fib = (n) => ({
	[Symbol.iterator]: () => {
		let i = 1;
		let prev = 0;
		let curr = 0;
		return {
			next: () => {
				if (n >= i++) {
					[prev, curr] = [curr, prev + curr || 1];
					/**
					 * Above logic
					 *
					 * let temp = prev
					 * prev = curr
					 * curr = (temp + curr) || 1
					 */

					return {
						value: prev,
						done: false,
					};
				}
				return {
					done: true,
				};
			},
		};
	},
});

console.log([...Fib(10)]);
