class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}
/*
Populating Next Right Pointers in Each Node

Leetcode medium question - https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

*/
export function connect(root: Node | null): Node | null {
  if (!root) return null

  const q: (Node | null)[] = [root]
  while (q.length) {
    const qLen = q.length

    for (let i = 0; i < qLen; i++) {
      const node = q.shift() as Node
      if (i !== qLen - 1) node.next = q[0]
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return root
}
