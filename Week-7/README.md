# Week 7 assignment

## Problem 7.1 : Reverse the Linked list

Given a linked list of N nodes. The task is to reverse this list.

### Steps

1. Initialize three variables current, prev and next
2. Assign head to current and null to prev
3. Loop over the current untill current != null
    1. Set next = current.next
    2. Set current.next = prev
    3. Set current to prev and next to current
4. Set prev to head

### Complexity

#### Time Complexity:

O(N)

#### Auxiliary Space:

O(N)

## Problem 7.2: Rotate Linked List

Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.

### Steps

1. Initialize a count variable with 0 and pointer leftRotateCountNode pointing to Null and current pointing to head node.
2. Move from current till leftRotateCount-1 and point leftRotateCountNode to current’s next and current’t next to NULL.
3. Move current from kth node to end node and point current’s next to head.

### Complexity

#### Time Complexity:

O(N)

#### Auxiliary Space:

O(1)
