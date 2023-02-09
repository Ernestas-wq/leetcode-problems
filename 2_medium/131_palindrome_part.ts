/* 
Palindrome Partitioning

Leetcode medium question https://leetcode.com/problems/palindrome-partitioning/
*/

function partition(s: string): string[][] {
  const output: string[][] = []
  const partition: string[] = []

  function dfs(i: number) {
    if (i >= s.length) {
      output.push([...partition])
      return
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        partition.push(s.slice(i, j + 1))
        dfs(j + 1)
        partition.pop()
      }
    }
  }
  dfs(0)

  return output
}

function isPalindrome(s: string, i: number, j: number): boolean {
  if (i === j) return true
  let left = i
  let right = j

  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}
