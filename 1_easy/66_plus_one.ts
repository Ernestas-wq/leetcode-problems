/* 

Plus One 

leetcode easy question - https://leetcode.com/problems/plus-one/

*/

function plusOne(digits: number[]): number[] {
  const last = digits.length - 1
  // if last isn't 9 add 1 to last and return
  if (digits[last] !== 9) {
    digits[last]++
    return digits
  }

  // start pointer at end
  for (let i = last; i >= 0; i--) {
    // replace any 9 with 0 until it's not a 9
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }
  // if went through whole loop need to add 0 to the end and replace front 0 with a 1
  digits[0] = 1
  digits.push(0)

  return digits
}
