/* 
Partition Equal Subset Sum

Leetcode medium question - https://leetcode.com/problems/partition-equal-subset-sum/

*/

// memoized
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((sum, num) => sum + num, 0)
  if (sum % 2 !== 0) return false
  const target = sum / 2

  function dfs(
    i: number,
    curr_sum: number,
    memo: Record<string, boolean> = {}
  ): boolean {
    const key = `${curr_sum},${i}`
    if (key in memo) return memo[key]
    if (curr_sum === target) return true
    if (curr_sum > target || i >= nums.length) return false

    const result =
      dfs(i + 1, curr_sum + nums[i], memo) || dfs(i + 1, curr_sum, memo)

    memo[key] = result

    return memo[key]
  }

  return dfs(0, 0)
}
// table
function can_part(nums: number[]): boolean {
  const sum = nums.reduce((sum, num) => sum + num, 0)
  if (sum % 2 !== 0) return false
  const target = sum / 2

  let dp = new Set<number>()
  dp.add(0)

  for (let j = nums.length - 1; j >= 0; j--) {
    const next_dp = new Set<number>()
    for (const t of Array.from(dp)) {
      if (nums[j] + t === target) return true
      next_dp.add(nums[j] + t)
      next_dp.add(t)
    }
    dp = next_dp
  }

  return false
}
