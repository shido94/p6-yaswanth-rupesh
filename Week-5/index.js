// // Write a function called vowelCount which accepts a string and returns a map
// // where the keys are numbers and the values are the count of the vowels in the string

let givenString = 'anyAlikeChar';

function isVowel(char) {
	return 'aeiou'.includes(char);
}

function vowelCount(str) {
	const map = new Map();
	str = str.toLowerCase();

	for (let char of str) {
		/**
		 * Logic
		 *
		 * First check if the character is vowels or not,
		 * if not do nothing,
		 * else check if that character exists in the map, if not add char with value 1
		 * otherwise increase the count of char
		 */

		isVowel(char)
			? map.has(char)
				? map.set(char, map.get(char) + 1)
				: map.set(char, 1)
			: '';
	}

	return map;
}

console.log(vowelCount(givenString));
