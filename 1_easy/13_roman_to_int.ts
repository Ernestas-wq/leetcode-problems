/* 

Roman to Integer

leetcode - easy question https://leetcode.com/problems/roman-to-integer/

*/

const map: { [id: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

export function romanToInt(s: string) {
  let sum = 0

  for (let i = 0; i < s.length; i++) {
    const tuple: string = s[i].concat(s[i + 1])
    if (tuple in map) {
      sum += map[tuple]
      i++
    } else {
      sum += map[s[i]]
    }
  }

  return sum
}
