class Queue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	// Enqueue an item to the queue
	enQueue(data) {
		// Push item into the first stack
		this.stack1.push(data);
	}

	// Dequeue an item from the queue
	deQueue() {
		// if both stacks are empty
		if (this.stack1.length == 0 && this.stack2.length == 0) {
			console.log('Q is empty');
			return -1;
		}

		// if stack2 is empty, move
		// elements from stack1
		if (this.stack2.length == 0) {
			while (this.stack1.length != 0) {
				this.stack2.push(this.stack1[0]);
				this.stack1.shift();
			}
		}

		// return the top item from stack2
		let item = this.stack2[0];
		this.stack2.shift();
		return item;
	}
}

let inputArray = [1, 2, 1, 3, 2, 1, 4, 2];
let outputArray = [];
let queue = new Queue();

for (let i = 0; i < inputArray.length; i++) {
	if (inputArray[i] === 1) {
		queue.enQueue(inputArray[i + 1]);
		i = i + 1;
	} else if (inputArray[i] === 2) {
		let removedElement = queue.deQueue();
		outputArray.push(removedElement);
	}
}

console.log(outputArray);
