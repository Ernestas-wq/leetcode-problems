/* 

Longest Common Prefix

leetcode - easy question https://leetcode.com/problems/longest-common-prefix/description/

*/

function longestCommonPrefix(words: string[]): string {
  if (words.length === 1) return words[0]
  if (!words.length) return ""

  let map: { [id: string]: number } = {}
  let longestPrefix = ""
  let lastLongestEnd = words[0].length

  for (let i = 0; i < words.length; i++) {
    // first iteration make possible prefix map
    if (i === 0) {
      for (let j = 1; j <= words[i].length; j++) {
        const prefix = words[i].slice(0, j)
        map[prefix] = j
      }
      continue
    }

    for (let k = 1; k <= lastLongestEnd; k++) {
      const prefix = words[i].slice(0, k)

      // if > 0 iterations word prefix is not in map early return
      if (k === 1 && !(prefix in map)) {
        return ""
      }

      // update longest prefix until possible
      if (prefix in map) {
        longestPrefix = prefix
      }
    }
    lastLongestEnd = map[longestPrefix]
  }

  return longestPrefix
}
