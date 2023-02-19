/* 
LCA Binary Tree 

Leetcode medium - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

*/
// slow but works
function dfs(curr: TreeNode | null, needle: number): TreeNode[] | null {
  if (!curr) return null
  if (curr.val === needle) {
    return [curr]
  }

  const left_path = dfs(curr.left, needle)
  if (left_path) return [curr, ...left_path]

  const right_path = dfs(curr.right, needle)
  if (right_path) return [curr, ...right_path]
  return null
}
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!p || !q || !root) return null

  const p_path = dfs(root, p.val) as TreeNode[]
  const q_path = dfs(root, q.val) as TreeNode[]

  let output = root
  let i = 1
  while (p_path[i] === q_path[i]) {
    output = p_path[i]
  }
  return output
}

// cleaner and faster
function lca(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root!.val === p!.val || root!.val === q!.val) return root
  if (!root!.right && !root!.left) return null

  let left = null
  let right = null

  if (root!.left) {
    left = lca(root!.left, p, q)
  }
  if (root!.right) {
    right = lca(root!.right, p, q)
  }

  if (left && right) return root

  return left || right
}
