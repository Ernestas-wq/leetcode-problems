/* 
Clone graph

Leetcode medium question - https://leetcode.com/problems/clone-graph/
*/

class LeNode {
  val: number
  neighbors: LeNode[]
  constructor(val?: number, neighbors?: LeNode[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function cloneGraph(node: LeNode | null): LeNode | null {
  if (!node) return null
  const map: Map<LeNode, LeNode> = new Map()
  const q = [node]
  while (q.length) {
    const curr = q.shift() as LeNode
    for (const node of curr.neighbors) {
      if (!map.has(node)) {
        map.set(curr, new LeNode(node.val))
        q.push(node)
      }
    }
  }

  for (const [original, copy] of map.entries()) {
    for (const n of original.neighbors) {
      copy.neighbors.push(map.get(n) as LeNode)
    }
  }

  return map.get(node) || null
}
