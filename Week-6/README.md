# Problem 6.3 Sort array of 0's,1's and 2's

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder. Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2Explanation: 0's 1's and 2's are segregated into ascending order.Example 2:Input:N = 3arr[] = {0 1 0}Output:0 0 1Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

# Steps

1. Initiate variables zeroes, ones and twos with count value 0
2. Iterate over the array and calculate ones, twos, and zeroes
3. Iterate again , insert all numbers in ascending orders

# complexity

## Time Complexity:

O(n)

## Space Complexity:

O(1)
