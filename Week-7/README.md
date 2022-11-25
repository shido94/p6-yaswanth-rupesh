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

O(1)

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

## Problem 7.3: Detect loop in a linked list

Given a linked list of N nodes. The task is to check if the linked list has a loop. Linkedlist can contain self loop

### Steps

1. Traverse linked list using two pointers.
2. Move one pointer(low) by one and another pointer(high) by two.
3. If these pointers meet at the same node then there is a loop. If pointers do not meet then the linked list doesn’t have a loop

### Complexity

#### Time Complexity:

O(N)

#### Auxiliary Space:

O(1)

## Problem 7.4: Parenthesis Checker

Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”

### Steps

1. Declare a character stack (say temp).
2. Now traverse the string exp. 1. If the current character is a starting bracket ( ‘(‘ or ‘{‘ or ‘[‘ ) then push it to stack.
    1. If the current character is a closing bracket ( ‘)’ or ‘}’ or ‘]’ ) then pop from stack and if the popped character is the matching starting bracket then fine. 3. Else brackets are Not Balanced.
3. After complete traversal, if there is some starting bracket left in stack then Not balanced, elseBalanced.

### Complexity

#### Time Complexity:

O(N)

#### Auxiliary Space:

O(N)

## Problem 7.5: Next Greater ELement

Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. If there does not exist next greater of currentelement, then next greater element for current element is -1. For example, next greaterof the last element is always -1

### Steps

1. Push the first element to stack.
2. Pick the rest of the elements one by one and follow the following steps in the loop.
    1. Mark the current element as next.
    2. If the stack is not empty, compare top most element of stack with next.
    3. If next is greater than the top element, Pop element from the stack. next is the next greater element for the popped element.
    4. Keep popping from the stack while the popped element is smaller than next. next becomes the next greater element for all such popped elements.
3. Finally, push the next in the stack.
4. After the loop in step 2 is over, pop all the elements from the stack and print -1 as the next element for them.

### Complexity

#### Time Complexity:

O(N)

#### Auxiliary Space:

O(N)

## Problem 7.6: Implement a Queue using 2 stack

Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a queryof this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to popelement from queue and print the poped element)

### Steps

1. Declare a character stack (say temp).
2. Now traverse the string exp. 1. If the current character is a starting bracket ( ‘(‘ or ‘{‘ or ‘[‘ ) then push it to stack.
    1. If the current character is a closing bracket ( ‘)’ or ‘}’ or ‘]’ ) then pop from stack and if the popped character is the matching starting bracket then fine. 3. Else brackets are Not Balanced.
3. After complete traversal, if there is some starting bracket left in stack then Not balanced, elseBalanced.

### Complexity

#### Time Complexity:

1. Push operation: O(1).
2. Pop operation : O(N).

#### Space Complexity:

O(N).
