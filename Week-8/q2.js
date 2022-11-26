class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

class BinarySearchTree {
	constructor(data) {
		this.root = null;
	}

	isBST(root) {
		// traverse the tree in in order fashion and
		// keep track of prev node
		if (root != null) {
			if (!this.isBST(root.left)) return false;

			// Allows only distinct valued nodes
			if (prev != null && root.data <= prev.data) return false;

			prev = root;

			return this.isBST(root.right);
		}
		return true;
	}
}

let prev;

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

const bst = new BinarySearchTree();
console.log(bst.isBST(root));
