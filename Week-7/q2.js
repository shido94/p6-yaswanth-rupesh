class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertAtHead(data) {
		this.head = new Node(data, this.head);
	}

	rotateLinkedList(leftRotateCount) {
		if (leftRotateCount === 0) return;

		let current = this.head;
		let count = 1;

		while (count < leftRotateCount && current != null) {
			current = current.next;
			count++;
		}

		if (current == null) return;

		let leftRotateCountNode = current;

		while (current.next != null) {
			current = current.next;
		}

		current.next = this.head;

		this.head = leftRotateCountNode.next;
		leftRotateCountNode.next = null;
	}

	// Print data
	printData() {
		const arr = [];
		let current = this.head;

		while (current != null) {
			arr.push(current.data);
			current = current.next;
		}
		console.log(arr.join(' '));
	}
}

const ll = new LinkedList();
ll.insertAtHead(9);
ll.insertAtHead(8);
ll.insertAtHead(7);
ll.insertAtHead(4);
ll.insertAtHead(2);

// Our linked List after insertion
ll.printData();

/**
 * Reverse the link list
 */
ll.rotateLinkedList(3);

/**
 * Print the reversed linked list
 */
ll.printData();
