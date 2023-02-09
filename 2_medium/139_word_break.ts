/*
Word break

Leetcode medium question - https://leetcode.com/problems/word-break/
*/

function wordBreak(s: string, wordDict: string[]): boolean {
  const memo: { [id: string]: boolean } = {}

  function solve(s: string) {
    if (s in memo) return memo[s]
    if (s === "") return true
    for (const word of wordDict) {
      if (s.indexOf(word) === 0) {
        const suffix = s.slice(word.length, s.length)
        if (solve(suffix)) {
          memo[s] = true
          return true
        }
      }
    }
    memo[s] = false
    return false
  }

  return solve(s)
}
