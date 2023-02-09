/* 
Sort colors

Leetcode medium question - https://leetcode.com/problems/sort-colors/

*/
// my solution O(n) two go's
export function sortColors(nums: number[]): void {
  const colors = [0, 0, 0]
  for (const num of nums) {
    colors[num]++
  }
  let numsIdx = 0
  for (let i = 0; i < colors.length; i++) {
    while (colors[i] > 0) {
      nums[numsIdx] = i
      colors[i]--
      numsIdx++
    }
  }
}

// other solution partition O(n) one go

function swap(nums: number[], i: number, j: number) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

export function solor_colors(nums: number[]): void {
  let left = 0
  let right = nums.length - 1

  let i = 0

  while (i <= right) {
    if (nums[i] === 0) {
      swap(nums, i, left)
      left++
      i++
    } else if (nums[i] === 2) {
      swap(nums, i, right)
      right--
    } else {
      i++
    }
  }
}
