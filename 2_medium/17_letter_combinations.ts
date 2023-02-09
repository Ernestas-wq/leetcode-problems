/*
Letter Combinations of a Phone Number

Leetcode medium question https://leetcode.com/problems/letter-combinations-of-a-phone-number/

*/
function letterCombinations(digits: string): string[] {
  if (!digits.length) return []

  const map: { [id: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["q", "p", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  if (digits.length === 1) return map[digits[0]]

  const result: string[] = []
  function backtrack(i: number, s: string) {
    if (s.length === digits.length) {
      result.push(s)
      return
    }

    for (const c of map[digits[i]]) {
      backtrack(i + 1, s + c)
    }
  }

  backtrack(0, "")

  return result
}

function letterCombinations2(digits: string): string[] {
  const output: string[] = []
  if (!digits.length) return output
  output.push("")
  const chars: string[] = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ]

  for (let i = 0; i < digits.length; i++) {
    const index = +digits[i]
    while (output[0].length === i) {
      console.log(output)
      const currString = output.shift()
      for (const c of chars[index]) {
        output.push(currString + c)
      }
    }
  }

  return output
}

function lettersBrilliant(digits: string): string[] {
  if (!digits) {
    return []
  }

  const dict: { [key: string]: string[] } = {
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  let res: string[] = [""]

  for (const c of digits) {
    const list = dict[c]
    if (!list) {
      continue
    }
    const temp: string[] = []
    for (const l of list) {
      for (const str of res) {
        temp.push(str + l)
      }
    }
    res = temp
  }

  return res
}
