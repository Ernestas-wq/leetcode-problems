/* 
Longest Substring with At Least K Repeating Characters

Leetcode medium question - https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
*/

function longestSubstring(s: string, k: number): number {
  const n = s.length
  let maxLen = 0

  for (let uniqueChars = 1; uniqueChars <= 26; uniqueChars++) {
    const freqMap = new Array<number>(26).fill(0)
    let left = 0,
      right = 0,
      countAtLeastK = 0,
      uniqueCount = 0

    while (right < n) {
      const indexRight = s.charCodeAt(right) - "a".charCodeAt(0)
      freqMap[indexRight]++
      if (freqMap[indexRight] === 1) {
        uniqueCount++
      }
      if (freqMap[indexRight] === k) {
        countAtLeastK++
      }
      right++

      while (uniqueCount > uniqueChars) {
        const indexLeft = s.charCodeAt(left) - "a".charCodeAt(0)
        freqMap[indexLeft]--
        if (freqMap[indexLeft] === 0) {
          uniqueCount--
        }
        if (freqMap[indexLeft] === k - 1) {
          countAtLeastK--
        }
        left++
      }

      if (uniqueCount === countAtLeastK) {
        maxLen = Math.max(maxLen, right - left)
      }
    }
  }

  return maxLen
}
