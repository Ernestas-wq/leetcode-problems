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
Binary Tree Zigzag Level Order Traversal


Leetcode medium question - https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
*/
// my cheap ass solution
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  let t = 0
  const q: (TreeNode | null)[] = [root]
  const output: number[][] = []

  while (q.length) {
    const len = q.length
    const level: number[] = []
    if (t % 2 === 0) {
      for (let i = 0; i < len; i++) {
        const node = q.shift()
        if (node) {
          level.push(node.val)
          q.push(node.left)
          q.push(node.right)
        }
      }
    } else {
      for (let i = 0; i < len; i++) {
        const node = q.pop()
        if (node) {
          level.push(node.val)
          q.unshift(node.right)
          q.unshift(node.left)
        }
      }
    }
    t++
    if (level.length) output.push(level)
  }
  return output
}

// professionals at work

function zigzag_level_order(root: TreeNode | null): number[][] {
  let ans: number[][] = []
  let queue = root == null ? [] : [root]
  let LTR = true

  while (queue.length) {
    let nodeValList: number[] = []

    for (let i = queue.length - 1; i >= 0; i--) {
      let node = queue.pop()

      if (node!.left != null) queue.unshift(node!.left)
      if (node!.right != null) queue.unshift(node!.right)

      nodeValList[LTR ? "push" : "unshift"](node!.val)
    }

    ans.push(nodeValList)

    LTR = !LTR
  }

  return ans
}
