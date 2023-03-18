/* 
Integer to Roman

Leetcode medium https://leetcode.com/problems/integer-to-roman/
*/

const map: { [id: number]: string } = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM",
}

function intToRoman(num: number): string {
  let multi = 10

  const output: string[] = []
  while (num > 0) {
    const remainder = num % multi
    output.unshift(process(remainder, multi))
    num = num - remainder
    multi *= 10
  }
  return output.join("")
}

const process = (num: number, multi: number): string => {
  if (num in map) return map[num]
  multi = multi / 10
  if (num < multi * 5)
    return Array(num / multi)
      .fill(map[multi])
      .join("")

  return [
    map[num - (num % (multi * 5))],
    ...Array((num % (multi * 5)) / multi).fill(map[multi]),
  ].join("")
}
