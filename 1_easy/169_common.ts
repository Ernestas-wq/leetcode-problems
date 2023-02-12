/* 
Majority Element

Leetcode easy question - https://leetcode.com/problems/majority-element/description/

*/

// straight forward with a map
function majorityElement(nums: number[]): number {
  const map: Record<number, number> = {}
  const n = Math.floor(nums.length / 2)
  for (const num of nums) {
    if (num in map) map[num]++
    else {
      map[num] = 1
    }
    if (num in map && map[num] > n) return num
  }
  return -1
}
// very smart O(1) space
function majority_element(nums: number[]): number {
  let count = 1
  let currentElement = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      currentElement = nums[i]
    }
    if (nums[i] === currentElement) {
      count++
    } else {
      count--
    }
  }
  return currentElement
}
