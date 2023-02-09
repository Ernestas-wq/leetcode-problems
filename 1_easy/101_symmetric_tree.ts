/* 
Symmetric tree 

leetcode easy question - https://leetcode.com/problems/symmetric-tree/ 

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

function compare(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  // if both are null that branch is settled
  if (tree1 === null && tree2 === null) return true
  // then either being null means its not equal
  if (tree1 === null || tree2 === null) return false
  // missmatched values means it's not equal
  if (tree1.val !== tree2.val) return false

  return compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left)
}

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false
  return compare(root.left, root.right)
}
