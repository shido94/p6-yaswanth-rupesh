// function createStack() {
// 	return {
// 		items: [],
// 		push(item) {
// 			this.items.push(item);
// 		},
// 		pop() {
// 			return this.items.pop();
// 		},
// 	};
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items; // => [10]
// stack.items = [10, 100, 1000]; // Encapsulation broken!

// console.log(stack.items);

/**
 *
 * In the above example, you're able to access the stack.item because
 * we're directly  returning the items array and it's not a good idea
 */

// ################################################################

function createStack() {
	// Write your code here...
	const items = [];

	return {
		push(item) {
			items.push(item);
		},
		pop() {
			items.push();
		},
		print() {
			return items;
		},
	};
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

console.log(stack.items);
console.log(stack.print());

/**
 * Here, We are not returning the items array directly,
 * I have created a new method 'print()', which will only return the output,
 *
 * So here you are directly accessing the variable,
 * I created a new method, so that you can only interact with the methods
 */
