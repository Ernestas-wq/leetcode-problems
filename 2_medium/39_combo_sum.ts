/* 

Combination sum

Leetcode medium question - https://leetcode.com/problems/combination-sum/
*/
function combinationSum(candidates: number[], target: number): number[][] {
  const output: number[][] = []

  const dfs = (i: number, curr: number[], sum: number) => {
    if (i >= candidates.length || sum > target) return
    if (sum === target) {
      output.push([...curr])
      return
    }
    curr.push(candidates[i])

    dfs(i, curr, sum + candidates[i])
    curr.pop()
    dfs(i + 1, curr, sum)
  }

  dfs(0, [], 0)

  return output
}
