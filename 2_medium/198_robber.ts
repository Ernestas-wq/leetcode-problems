/* 
House robber

Leetcode medium question - https://leetcode.com/problems/house-robber/
*/

// table style
function rob(nums: number[]): number {
  let r1 = 0
  let r2 = 0

  for (const n of nums) {
    const temp = Math.max(r1 + n, r2)
    r1 = r2
    r2 = temp
  }

  return r2
}

// memo
function rob2(nums: number[]): number {
  function robRecursive(
    i: number,
    memo: Map<number, number> = new Map()
  ): number {
    if (i < 0) {
      return 0
    }

    if (memo.has(i)) {
      return memo.get(i)!
    }

    const maxAmount = Math.max(
      robRecursive(i - 2) + nums[i],
      robRecursive(i - 1)
    )

    memo.set(i, maxAmount)

    return maxAmount
  }

  return robRecursive(nums.length - 1)
}
