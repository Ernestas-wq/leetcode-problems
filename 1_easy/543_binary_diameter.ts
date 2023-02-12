/* 
 Diameter of Binary Tree

 Leetcode easy question - https://leetcode.com/problems/diameter-of-binary-tree/description/
*/

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  let max = 0

  const count = (n: TreeNode | null): number => {
    if (!n) return 0
    const left = count(n.left)
    const right = count(n.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  count(root)
  return max
}
