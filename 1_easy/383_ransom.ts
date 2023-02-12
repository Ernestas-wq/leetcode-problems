/* 
Ransom Note

Leetcode easy question - https://leetcode.com/problems/ransom-note/description/
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false
  const chars = Array(26).fill(0)

  for (const c of ransomNote) {
    const idx = c.charCodeAt(0) - "a".charCodeAt(0)
    chars[idx]++
  }

  for (const c of magazine) {
    const idx = c.charCodeAt(0) - "a".charCodeAt(0)
    chars[idx]--
  }
  return chars.every((n) => n <= 0)
}
