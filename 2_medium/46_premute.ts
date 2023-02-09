/* 
Permutations

Leetcode medium question - https://leetcode.com/problems/permutations/description/


*/
// my solution
function permute(nums: number[]): number[][] {
  return backtrack(nums, [], [], nums.length)
}

function backtrack(
  nums: number[],
  combo: number[],
  result: number[][],
  comboSize: number
): number[][] {
  if (combo.length === comboSize) {
    result.push(combo)
    return result
  }

  for (let i = 0; i < nums.length; i++) {
    const remains = [...nums]
    remains.splice(i, 1)
    backtrack(remains, [...combo, nums[i]], result, comboSize)
  }
  return result
}

// other solution

function permute_2(nums: number[]): number[][] {
  if (nums.length === 1) return [[...nums]]
  const output: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    let n = nums.shift()
    let perms = permute_2(nums)
    for (let perm of perms) {
      perm.push(n!)
      output.push(perm)
    }
    nums.push(n!)
  }
  return output
}
