/* 
Valid anagram

Leetcode easy question - https://leetcode.com/problems/valid-anagram/description/
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const charsS = Array(26).fill(0)
  const charsT = Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    const idxS = parseInt(s.charAt(i), 32) - parseInt("a", 32)
    const idxT = parseInt(t.charAt(i), 32) - parseInt("a", 32)
    charsS[idxS]++
    charsT[idxT]++
  }

  return charsS.every((num, i) => num === charsT[i])
}
