/* 
Kth Smallest Element in a BST

Leetcode medium question - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return 0
  const s = []
  let curr = 1

  while (s.length || root) {
    while (root) {
      s.push(root)
      root = root.left
    }

    root = s.pop() as TreeNode
    if (curr === k) return root.val
    curr++
    root = root.right
  }
  return 0
}
