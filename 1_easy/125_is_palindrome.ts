/* 
Valid Palindrome

leetcode easy question - https://leetcode.com/problems/valid-palindrome/

*/

function isValidChar(char: string): string | null {
  return /[^\W_]/.test(char) ? char.toLowerCase() : null
}

export function isPalindrome(s: string): boolean {
  if (s.length === 1) return true
  let left = 0
  let right = s.length - 1

  while (right >= left) {
    const rightChar = isValidChar(s.charAt(right))
    if (!rightChar) {
      right--
      continue
    }
    const leftChar = isValidChar(s.charAt(left))
    if (!leftChar) {
      left++
      continue
    }

    if (leftChar !== rightChar) {
      console.log(leftChar)
      console.log(rightChar)
      return false
    }
    left++
    right--
  }
  return true
}
