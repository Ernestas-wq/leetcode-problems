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
Invert Binary Tree
Leetcode easy question - https://leetcode.com/problems/invert-binary-tree/

*/
export function invertTree(root: TreeNode | null): TreeNode | null {
  return swap(root)
}

function swap(n: TreeNode | null): TreeNode | null {
  if (!n) return null
  let temp = n.left
  n.left = n.right
  n.right = temp

  swap(n.left)
  swap(n.right)
  return n
}
