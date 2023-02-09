/* 
Longest Substring Without Repeating Characters

leetcode medium question - https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1
  const map: { [id: string]: boolean } = {}
  let left = 0
  let right = 0
  let maxLength = 0

  // iterate
  for (; right < s.length; right++) {
    if (map[s[right]]) {
      // save best result
      maxLength = Math.max(right - left, maxLength)
      //   unsee everyting until duplicate
      while (left < right) {
        if (s[left] === s[right]) {
          left++
          break
        } else {
          map[s[left]] = false
        }
        left++
      }
    } else {
      maxLength = Math.max(right - left + 1, maxLength)
      map[s[right]] = true
    }
  }

  return maxLength
}
