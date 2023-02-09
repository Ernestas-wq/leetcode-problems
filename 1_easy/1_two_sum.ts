/*
Two Sum
leetcode easy level problem - https://leetcode.com/problems/two-sum/

*/

function twoSum(nums: number[], target: number): number[] {
  const remainderToIndex = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i]
    const remainderIndex = remainderToIndex.get(nums[i])
    if (remainderIndex !== undefined) {
      return [remainderIndex, i]
    }

    remainderToIndex.set(remainder, i)
  }
  return []
}
