/*

28. Find the Index of the First Occurrence in a String

Leetcode medium question - https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
*/
// my solution
export function strStr(haystack: string, needle: string): number {
  const l = needle.length

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const hayStart = i
      const hayEnd = i + l - 1
      if (compare(haystack, needle, hayStart, hayEnd)) {
        return i
      }
    }
  }
  return -1
}

function compare(
  hay: string,
  needle: string,
  hayStart: number,
  hayEnd: number
) {
  let left = 0
  let right = needle.length - 1

  while (hayStart <= hayEnd) {
    if (hay[hayStart] !== needle[left] || hay[hayEnd] !== needle[right]) {
      return false
    }
    left++
    hayStart++
    right--
    hayEnd--
  }
  return true
}

// simple but slower
export function strStr2(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length + 1 - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i
  }
  return -1
}
