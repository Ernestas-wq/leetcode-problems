/* 
Lowest Common Ancestor of a Binary Search Tree

Leetcode medium question - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/

// my solution
function search(
  curr: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!curr || !p || !q) return null
  if (p.val < curr.val && q.val < curr.val) {
    return search(curr.left, p, q)
  } else if (p.val > curr.val && q.val > curr.val) {
    return search(curr.right, p, q)
  } else {
    return curr
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null
  return search(root, p, q)
}

// other iterative

function lowest_commonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !q || !p) return null
  let curr: TreeNode | null = root
  while (curr) {
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left
    } else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right
    } else {
      return curr
    }
  }
  return curr
}
