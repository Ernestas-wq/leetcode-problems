/* 
Find all anagrams in a string

Leetcode medium question - https://leetcode.com/problems/find-all-anagrams-in-a-string/
*/

// brute force

export function findAnagrams(s: string, p: string): number[] {
  if (!s || !p || p.length > s.length) return []

  const output: number[] = []
  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (isAnagram(s.slice(i, i + p.length), p)) output.push(i)
  }
  return output
}

function isAnagram(s: string, p: string): boolean {
  const chars = Array(26).fill(0)

  for (const char of s) {
    const idx = char.charCodeAt(0) - "a".charCodeAt(0)
    chars[idx]++
  }
  for (const char of p) {
    const idx = char.charCodeAt(0) - "a".charCodeAt(0)
    chars[idx]--
  }

  return chars.every((count) => count === 0)
}

// window technique
export function find_anagrams(s: string, p: string): number[] {
  let res: number[] = []
  let charCount: number[] = Array(26).fill(0)
  let windowCount: number[] = Array(26).fill(0)

  // Store the frequency of each character in p
  for (let i = 0; i < p.length; i++) {
    charCount[p.charCodeAt(i) - 97]++
  }

  // Check for anagrams in the string s
  let left = 0,
    right = 0
  while (right < s.length) {
    let rightChar = s.charCodeAt(right) - 97
    windowCount[rightChar]++
    right++

    // When the window size becomes equal to p's length, check if it's an anagram
    while (windowCount[rightChar] > charCount[rightChar]) {
      windowCount[s.charCodeAt(left) - 97]--
      left++
    }

    if (right - left === p.length) {
      res.push(left)
    }
  }

  return res
}
