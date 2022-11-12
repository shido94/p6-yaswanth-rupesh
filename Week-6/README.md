# Problem 6.4 : Best time to buy and sell stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock andchoosing a different day in the future to sell that stock.Return the maximum profit youcan achieve from this transaction. If you cannot achieve any profit, return 0.Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell. Example 2: Input: prices =[7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the maxprofit = 0 Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104

# Steps

1. Declare a buy variable to store the buy cost and profit to store the maximum profit.
2. Initialize the min variable to the min value.
3. Iterate over the prices array and check if the current price is minimum or not.
    1. If the current price is minimum then buy on this ith day.
    2. If the current price is greater than the previous buy then make profit from it and maximize the profit.
4. Finally, return the profit.

# Complexity

## Time Complexity:

O(N)

## Auxiliary Space:

O(1)
