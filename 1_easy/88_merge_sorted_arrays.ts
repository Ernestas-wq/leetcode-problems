/* 
Merge Sorted Array

leetcode easy question - https://leetcode.com/problems/merge-sorted-array/

*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return
  if (m === 0) nums1 = nums2

  let swapInto = nums1.length - 1

  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      // if last nums1 greater than last nums2, put it to the end
      nums1[swapInto] = nums1[m - 1]
      // move pointer back
      m--
    } else {
      // otherwise put last nums2 to the end
      nums1[swapInto] = nums2[n - 1]
      // move pointer back
      n--
    }
    // always update where to swap into
    swapInto--
  }
}
