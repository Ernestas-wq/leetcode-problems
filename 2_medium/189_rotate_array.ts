/* 
Rotate Array

Leetcode medium question - https://leetcode.com/problems/rotate-array/
*/

function rotate(nums: number[], k: number): void {
  if (k === nums.length || !k || !nums.length) return
  const rotate = k % nums.length

  const output = Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    let swap_to = i + rotate
    if (swap_to >= nums.length) swap_to = swap_to % nums.length
    output[swap_to] = nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = output[i]
  }
}

function rot(nums: number[], k: number): void {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}

function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}
