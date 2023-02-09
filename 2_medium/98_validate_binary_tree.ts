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

Validate Binary Search Tree

Leetcode medium question - https://leetcode.com/problems/validate-binary-search-tree/

*/

// my solution recursive
export function isValidBST(root: TreeNode | null): boolean {
  return dfs(root, -Infinity, Infinity)
}

function dfs(curr: TreeNode | null, min: number, max: number): boolean {
  if (!curr) return true
  if (curr.val <= min || curr.val >= max) return false

  return dfs(curr.left, min, curr.val) && dfs(curr.right, curr.val, max)
}

// iterative

function is_valid_bst(root: TreeNode | null) {
  if (!root) return false

  const stack: TreeNode[] = []
  let pre: TreeNode | null = null

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop() as TreeNode
    if (pre && pre.val >= root.val) return false
    pre = root
    root = root.right
  }
  return true
}
