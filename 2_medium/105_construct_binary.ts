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
Construct Binary Tree from Preorder and Inorder Traversal
D
Leetcode medium question - https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null
  const root = new TreeNode(preorder[0])
  const pivot = inorder.indexOf(preorder[0]) // 7
  root.left = buildTree(preorder.slice(1, pivot + 1), inorder.slice(0, pivot))
  root.right = buildTree(
    preorder.slice(pivot + 1, preorder.length),
    inorder.slice(pivot + 1, inorder.length)
  )

  return root
}
