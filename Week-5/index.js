// Write a function called hasDuplicate which accepts an array and
// returns true or false if that array contains a duplicate

const arr = [1, 5, 1, 4];

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate(arr));
