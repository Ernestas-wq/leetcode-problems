/* 
Coin Change

Leetcode medium question - https://leetcode.com/problems/coin-change/
*/

function coinChange(coins: number[], amount: number): number {
  const table = [0, ...Array(amount).fill(Infinity)]

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) table[i] = Math.min(table[i], 1 + table[i - coin])
    }
  }

  return table[amount] === Infinity ? -1 : table[amount]
}

// recursive

function cc(coins: number[], amount: number): number {
  function dfs(currAmount: number, cache: Record<number, number> = {}): number {
    if (currAmount in cache) return cache[currAmount]
    if (currAmount === 0) return 0
    if (currAmount < 0) return -1

    let minCoins = Infinity
    for (let coin of coins) {
      const result = dfs(currAmount - coin, cache)
      cache[currAmount - coin] = result
      if (result !== -1) {
        minCoins = Math.min(minCoins, result + 1)
      }
    }
    return minCoins !== Infinity ? minCoins : -1
  }

  return dfs(amount)
}
