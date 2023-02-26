/*
Quick Select magic 
Find kth-largest

Leetcode medium question - https://leetcode.com/problems/kth-largest-element-in-an-array/

*/
function findKthLargest(nums: number[], k: number): number {
  k = nums.length - k

  function quick_select(l: number, r: number): number {
    let [pivot, curr] = [nums[r], l]

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        ;[nums[curr], nums[i]] = [nums[i], nums[curr]]
        curr++
      }
    }

    ;[nums[r], nums[curr]] = [nums[curr], nums[r]]

    if (curr > k) return quick_select(l, curr - 1)
    if (curr < k) return quick_select(curr + 1, r)
    return nums[curr]
  }

  return quick_select(0, nums.length - 1)
}
