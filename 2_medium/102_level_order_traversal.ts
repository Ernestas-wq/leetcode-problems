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
Binary Tree Level Order Traversal

Leetcode medium question - https://leetcode.com/problems/binary-tree-level-order-traversal/

*/
// my solution
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const output: number[][] = []
  const que = [root]
  while (que.length) {
    //process the que into a set
    let level: number[] = []
    for (const node of que) {
      level.push(node!.val)
    }
    output.push(level)
    let i = level.length
    level = []

    // empty the que and set up the next level
    while (i > 0) {
      const node = que.shift()
      for (const child of [node!.left, node!.right]) {
        if (child) que.push(child)
      }
      i--
    }
  }

  return output
}

//better solution

export function level_order(root: TreeNode | null): number[][] {
  const output: number[][] = []

  const que = [root]

  while (que.length) {
    const len = que.length
    const level: number[] = []
    for (let i = 0; i < len; i++) {
      const node = que.shift()
      if (node) {
        level.push(node.val)
        que.push(node.left)
        que.push(node.right)
      }
    }
    if (level.length) output.push(level)
  }
  return output
}
