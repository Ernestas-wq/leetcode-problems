/* 
78 - subsets

Leetcode medium question - https://leetcode.com/problems/subsets/
*/

function subsets(nums: number[]): number[][] {
  return collect(nums, 0, [], [])
}

function collect(
  nums: number[],
  idx: number,
  currSub: number[],
  output: number[][]
) {
  if (idx >= nums.length) {
    output.push([...currSub])
    return output
  }
  // include curr num in set
  currSub.push(nums[idx])
  collect(nums, idx + 1, currSub, output)

  // not include curr num in set
  currSub.pop()
  collect(nums, idx + 1, currSub, output)

  return output
}
