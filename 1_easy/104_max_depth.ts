/* 
 Maximum Depth of Binary Tree

leetcode easy question - https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/
// Recursive

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// Iterative 2 stacks

function maxDepthIterative(root: TreeNode | null): number {
  if (!root) return 0

  const nodeStack = [root]
  const intStack = [1]
  let max = 0

  while (nodeStack.length) {
    const curr = nodeStack.pop() as TreeNode
    const currNum = intStack.pop() as number

    max = Math.max(currNum, max)

    if (curr.left) {
      nodeStack.push(curr.left)
      intStack.push(currNum + 1)
    }

    if (curr.right) {
      nodeStack.push(curr.right)
      intStack.push(currNum + 1)
    }
  }
  return max
}
