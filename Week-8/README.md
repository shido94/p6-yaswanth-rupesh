# Problem 8.1: Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.Example 1:Input: root = [3,9,20,null,null,15,7]Output: 3Example 2:Input: root = [1,null,2]Output: 2Constraints:●The number of nodes in the tree is in the range [0, 104].●100 <= Node.val <= 100

## Steps

1. Recursively do a Depth-first search.
2. If the tree is empty then return 0
3. Otherwise, do the following
    1. Get the max depth of the left subtree recursively i.e. call maxDepth( tree->left-subtree)
    2. Get the max depth of the right subtree recursively i.e. call maxDepth( tree->right-subtree)
    3. Get the max of max depths of left and right subtrees and add 1 to it for the current node.
        1. max_depth = max(max dept of left subtree, max depth of right subtree) + 1
4. Return max_depth

## Complexity

1. Time Complexity: O(N)
2. Auxiliary Space: O(N)

# Problem 8.2 : Validate a Binary Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).A valid BST is defined as follows:The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees

## Steps

1. Do In-Order Traversal of the given tree and store the result in a temp array.
2. This method assumes that there are no duplicate values in the tree
3. Check if the temp array is sorted in ascending order, if it is, then the tree is BST

## Complexity

1. Time Complexity: O(N)
2. Auxiliary Space: O(1)

# Problem 8.3: Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).

## Steps

1. Create an empty queue queue and push root in queue.
2. Run While loop until queue is not empty.
    1. Initialize temp_node = queue.shift() and print temp_node->data.
    2. Push temp_node’s children i.e. temp_node -> left then temp_node -> right to queue
    3. Pop front node from queue.

## Complexity

1. Time Complexity: O(N)
2. Auxiliary Space: O(N)

# Problem 8.4: Find if Path Exists in Graph

There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive). The edges in the graph are represented as a 2D integer array edges,
where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.You want to determine if there is a valid path that exists from vertex source to vertex destination.Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

## Steps

1.  we need to try out all intermediate vertices ranging [1, N] and check:
    1. If there is a direct edge already which exists between the two nodes.
    2. Or we have a path from node i to intermediate node k and from node k to node j.

## Complexity

1. Time Complexity: O(N^3)
2. Auxiliary Space: O(N^2)

# Problem 8.5: Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.If the town judge exists, then: 1. The town judge trusts nobody. 2. Everybody (except for the town judge) trusts the town judge. 3. There is exactly one person that satisfies properties 1 and 2.You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise

## Steps

1. Create a map variable graph
2. Set the value of each vertices to 1
3. Traverse trust to set the value
    1. set v to value of v-1
    2. set e to value of e-1
4. Traverse trust to calculate how many trust everyone gets.
5. If anyone get N trust return key, else return -1

## Complexity

1. Time Complexity: O(N)
2. Auxiliary Space: O(N)

# Problem 8.6: All Path from source to target

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possiblepaths from node 0 to node n - 1 and return them in any order.The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e.,there is a directed edge from node i to node graph[i][j])

## Steps

1. Start the DFS traversal from the source.
2. Keep storing the visited vertices in an array or HashMap say ‘path[]’.
3. If the destination vertex is reached, print the contents of path[].
4. The important thing is to mark current vertices in the path[] as visited also so that the traversal doesn’t go in a cycle

## Complexity

1. Time Complexity: O(N^N)
2. Auxiliary Space: O(N^N)
