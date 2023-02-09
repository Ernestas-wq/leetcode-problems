/* 
Single Number

leetcode easy question - https://leetcode.com/problems/single-number/
*/

export function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const map: { [id: number]: boolean } = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      delete map[nums[i]]
    } else {
      map[nums[i]] = true
    }
  }

  return +Object.keys(map)[0]
}

export function singleNumber2(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length; i += 2) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      return sortedNums[i]
    }
  }
  return 0
}
