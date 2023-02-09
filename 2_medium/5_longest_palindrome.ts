/* 
Longest Palindromic Substring

Leetcode medium question - https://leetcode.com/problems/longest-palindromic-substring/
*/
function longestPalindrome(s: string): string {
  const table: boolean[][] = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(false))

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = true
      start = i
      end = i + 1
    }
    table[i][i] = true
  }

  for (let k = 3; k <= s.length; k++) {
    for (let i = 0; i < s.length - k + 1; i++) {
      const j = i + k - 1
      if (s[i] === s[j] && table[i + 1][j - 1]) {
        table[i][j] = true
        if (j - i > end - start) {
          start = i
          end = j
        }
      }
    }
  }

  return s.substring(start, end + 1)
}
// expand from middle
function longestPalindrome2(s: string) {
  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromMiddle(s, i, i)
    const len2 = expandFromMiddle(s, i, i + 1)
    const bestLen = Math.max(len1, len2)
    if (bestLen > end - start) {
      start = i - Math.floor((bestLen - 1) / 2)
      end = i + Math.floor(bestLen / 2)
    }
  }

  return s.substring(start, end + 1)
}

function expandFromMiddle(s: string, left: number, right: number): number {
  if (!s || left > right) return 0

  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--
    right++
  }
  return right - left - 1
}
