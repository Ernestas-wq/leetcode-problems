/* 
Check Completeness of a Binary Tree

Leetcode medium question - https://leetcode.com/problems/check-completeness-of-a-binary-tree/

*/

function isCompleteTree(root: TreeNode | null): boolean {
  if (!root) return false
  const q: TreeNode[] = [root]
  while (q.length) {
    const curr = q.shift()
    if (!curr) return q.every((node) => !!!node)

    for (const node of [curr.left, curr.right]) {
      q.push(node)
    }
  }
  return true
}
