/* 
Maximum Product Subarray

Leetcode medium - https://leetcode.com/problems/maximum-product-subarray/

*/

function maxProduct(nums: number[]): number {
  if (!nums.length) return 0

  let min = 1
  let max = 1
  let max_max = -Infinity
  for (const num of nums) {
    let temp = max * num
    max = Math.max(num * max, num * min, num)
    min = Math.min(temp, num * min, num)
    max_max = Math.max(max_max, max)
  }
  return max_max
}
