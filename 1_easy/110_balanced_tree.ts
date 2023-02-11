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

/* 
Balanced Binary Tree

leetcode esay question - https://leetcode.com/problems/balanced-binary-tree/
*/

function count(curr: TreeNode | null): [boolean, number] {
  if (!curr) return [true, 0]
  const left = count(curr.left)
  const right = count(curr.right)
  const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

  return [balanced, 1 + Math.max(left[1], right[1])]
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return false

  return count(root)[0]
}
