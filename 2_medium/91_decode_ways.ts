/* 
Decode Ways

Leetcode medium question - https://leetcode.com/problems/decode-ways/

*/
// dfs recursive
function numDecodings(s: string): number {
  const len = s.length
  const memo: { [id: number]: number } = {}
  memo[len] = 1
  function dfs(i: number): number {
    if (s[i] === "0") return 0
    if (i in memo) return memo[i]

    let res = dfs(i + 1)
    if (i + 1 < len && +s.slice(i, i + 2) <= 26) res += dfs(i + 2)
    memo[i] = res
    return memo[i]
  }
  return dfs(0)
}
// tabulated
function num_decodings(s: string): number {
  if (s[0] === "0") return 0

  let dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= s.length; i++) {
    let single = +s[i - 1]
    let double = +(s[i - 2] + s[i - 1])
    if (single >= 1 && single <= 9) dp[i] += dp[i - 1]
    if (double >= 10 && double <= 26) dp[i] += dp[i - 2]
  }

  return dp[s.length]
}
