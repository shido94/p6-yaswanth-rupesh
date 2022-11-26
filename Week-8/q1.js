class Node {
	constructor(item) {
		this.data = item;
		this.left = this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	maxDepth(node) {
		if (node == null) return 0;
		else {
			/* compute the depth of each subtree */
			let lDepth = this.maxDepth(node.left);
			let rDepth = this.maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth) return lDepth + 1;
			else return rDepth + 1;
		}
	}
}

/* Driver program to test above functions */

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const tree = new Tree();

console.log('Height of tree is : ' + tree.maxDepth(root));
