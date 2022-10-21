const getNumber = () => {
	return new Promise((resolve, reject) => {
		// Generating random number between 1 to 10000
		const random = Math.floor(Math.random() * 10000 + 1);

		/**
		 * If number divisible by 5, resolve the promise
		 */
		if (random % 5 === 0) {
			resolve(random);
		}

		reject(new Error('Number is not divisible by 5'));
	});
};

getNumber()
	.then(console.log)
	.catch((error) => console.log(error.message))
	.finally((_) => console.log('Finally, function has been executed'));
