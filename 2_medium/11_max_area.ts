/* 

Container with most water

Leetcode medium question - https://leetcode.com/problems/container-with-most-water/description/

*/

function maxArea(height: number[]): number {
  if (!height || height.length < 2) return 0

  let max_area = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    if (height[left] < height[right]) {
      max_area = Math.max(max_area, (right - left) * height[left])
      left++
    } else {
      max_area = Math.max(max_area, (right - left) * height[right])
      right--
    }
  }
  return max_area
}
