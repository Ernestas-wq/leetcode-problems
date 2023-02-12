/* 
Longest palindrome

Leetcode easy question - https://leetcode.com/problems/longest-palindrome/
*/

// my solution
function longest_palindrome(s: string): number {
  const chars = Array(58).fill(0)

  for (let c of s) {
    chars[c.charCodeAt(0) - "A".charCodeAt(0)]++
  }

  const count = chars.reduce((collector, count) => {
    if (count > 1) {
      return collector + (count - (count % 2))
    }
    return collector
  }, 0)

  return count === s.length ? count : count + 1
}

// other solution
function longestPalindrome(s: string): number {
  const cache = Object.create(null) as Record<string, number>
  let sum = 0
  for (const char of s) {
    if (!cache[char]) cache[char] = 1
    else {
      cache[char] = 0
      sum += 2
    }
  }
  return s.length > sum ? ++sum : sum
}
