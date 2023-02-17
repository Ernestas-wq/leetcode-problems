/* 
Product of Array Except Self

Leetcode medium question - https://leetcode.com/problems/product-of-array-except-self/
*/

function productExceptSelf(nums: number[]): number[] {
  const prefix = new Array(nums.length).fill(null)
  const postfix = new Array(nums.length).fill(null)

  // fill prefix
  let preProduct = 1
  for (let i = 0; i < nums.length; i++) {
    prefix[i] = preProduct * nums[i]
    preProduct = preProduct * nums[i]
  }
  // fill postfix
  let postProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = postProduct * nums[i]
    postProduct = postProduct * nums[i]
  }

  return nums.map((num, idx) => {
    if (idx === 0) return postfix[1]
    if (idx === nums.length - 1) return prefix[nums.length - 2]
    return prefix[idx - 1] * postfix[idx + 1]
  })
}
