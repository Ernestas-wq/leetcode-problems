/* 

Convert Sorted Array to Binary Search Tree

leetcode easy question - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function makeBSTFromArr(
  nums: number[],
  left: number,
  right: number
): TreeNode | null {
  if (left > right) return null
  if (left === right) return new TreeNode(nums[left])
  const mid = Math.floor((left + right) / 2)

  return new TreeNode(
    nums[mid],
    makeBSTFromArr(nums, left, mid - 1),
    makeBSTFromArr(nums, mid + 1, right)
  )
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const mid = Math.floor(nums.length / 2)

  return new TreeNode(
    nums[mid],
    makeBSTFromArr(nums, 0, mid - 1),
    makeBSTFromArr(nums, mid + 1, nums.length - 1)
  )
}
