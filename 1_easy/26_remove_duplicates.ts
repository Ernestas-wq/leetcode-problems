/* 

26. Remove Duplicates from Sorted Array

leetcode easy question - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

*/

function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]

  let curr = nums[0]
  let swapInto = 1

  for (let i = 1; i < nums.length; i++) {
    //check if value before is equal
    if (nums[i] === curr) {
      continue
    }
    // swap first value that isn't equal to curr
    swap(nums, i, swapInto)
    // update curr
    curr = nums[swapInto]
    // update where to swap into
    swapInto++
  }

  return swapInto
}

function swap(arr: number[], index1: number, index2: number): void {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
