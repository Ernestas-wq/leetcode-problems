/* 
Tree right side view

Leetcode medium question - https://leetcode.com/problems/binary-tree-right-side-view/
*/

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const q = [root]
  const output: number[] = []

  while (q.length) {
    const qLen = q.length
    for (let i = 0; i < qLen; i++) {
      const node = q.shift()
      if (i === qLen - 1) output.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return output
}
