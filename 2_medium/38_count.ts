/*  
Count and Say

Leetcode medium question - https://leetcode.com/problems/count-and-say/
*/

function countAndSay(n: number): string {
  let output = "1"
  if (n === 1) return output

  for (let i = 0; i < n - 1; i++) {
    output = count(output)
  }

  return output
}

function count(s: string): string {
  let output = ""
  let curr = s.charAt(0)
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === curr) {
      count++
      continue
    }
    count++
    output += count
    output += s[i]
    curr = s[i + 1]
    count = 0
  }

  return output
}
