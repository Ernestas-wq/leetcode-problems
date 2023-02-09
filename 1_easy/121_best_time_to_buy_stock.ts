/*
Best Time to Buy and Sell Stock

leetcode easy question - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/

export function maxProfit(prices: number[]): number {
  if (!prices.length || prices.length === 1) return 0

  let currLowest = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(prices[i] - currLowest, maxProfit)
    currLowest = Math.min(prices[i], currLowest)
  }

  return maxProfit
}
