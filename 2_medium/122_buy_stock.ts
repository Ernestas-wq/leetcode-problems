/*
Best Time to Buy and Sell Stock II

Leetcode medium question - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/

function maxProfit(prices: number[]): number {
  let total = 0

  let currProfit = 0
  let currLow = prices[0]

  for (const p of prices) {
    currProfit = Math.max(p - currLow, currProfit)
    if (currProfit > 0) {
      currLow = p
      total += currProfit
      currProfit = 0
    } else {
      currLow = Math.min(currLow, p)
    }
  }
  return total
}
