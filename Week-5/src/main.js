const mathOperations = {
	sum: (a, b) => {
		if (typeof a === 'number' && typeof b === 'number') {
			return a + b;
		}
		throw Error('Inputs should be numbers');
	},
	diff: (a, b) => {
		if (typeof a === 'number' && typeof b === 'number') {
			return a - b;
		}
		throw Error('Inputs should be numbers');
	},
	product: (a, b) => {
		if (typeof a === 'number' && typeof b === 'number') {
			return a * b;
		}
		throw Error('Inputs should be numbers');
	},
};

module.exports = mathOperations;
