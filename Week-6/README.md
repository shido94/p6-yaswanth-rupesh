# Problem 6.6 : 3 sum

Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.Return the sum of the three integers.Assume that there will only beone solutionExample: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

# steps

1. Sort the given array.
2. Loop over the array and fix the first element of the possible triplet, arr[i].
3. Then fix two pointers, one at (i + 1) and the other at n – 1. And look at the sum,
    1. If the sum is smaller than the sum we need to get to, we increase the first pointer.
    2. Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
    3. Update the closest sum found so far.

# Complexity Analysis:

## Time complexity: O(N2).

## Space Complexity: O(1).
