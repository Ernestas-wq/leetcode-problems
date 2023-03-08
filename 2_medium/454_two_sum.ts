/* 
4Sum II

Leetcode medium https://leetcode.com/problems/4sum-ii/
*/

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let output = 0
  const sumToCount: Record<number, number> = {}

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2
      sumToCount[sum] ??= 0
      sumToCount[sum]++
    }
  }

  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const sum = num3 + num4
      if (-sum in sumToCount) output += sumToCount[-sum]
    }
  }

  return output
}
