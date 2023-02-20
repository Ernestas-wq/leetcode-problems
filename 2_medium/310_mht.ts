/* 
Minimum height trees

Leetcode medium question https://leetcode.com/problems/minimum-height-trees/

*/

export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n <= 0) return []
  if (n === 1) return [0]
  const level: number[] = Array(n).fill(0)
  const graph: Record<number, number[]> = {}

  // make graph
  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a] = [...graph[a], b]
    graph[b] = [...graph[b], a]
    level[a]++
    level[b]++
  }

  const q = level.reduce((acc, val, idx) => {
    if (val === 1) return [...acc, idx]
    return [...acc]
  }, [] as number[])

  while (n > 2) {
    const qLen = q.length
    n -= qLen

    for (let i = 0; i < qLen; i++) {
      const val = q.shift()

      for (const edge of graph[val!]) {
        level[edge]--
        if (level[edge] === 1) q.push(edge)
      }
    }
  }

  return q
}

function fmt(n: number, edges: number[][]): number[] {
  if (n === 1) return [0]

  const neighbors:Set<number>[] = []
  for (let i = 0; i < n; i += 1) neighbors.push(new Set<number>())
  for (const edge of edges) {
    neighbors[edge[0]].add(edge[1])
    neighbors[edge[1]].add(edge[0])
  }

  let leaves: number[] = []
  for (let i = 0; i < n; i += 1) if (neighbors[i].size === 1) leaves.push(i)

  while (n > 2) {
    n -= leaves.length
    const new_leaves: number[] = []

    for (const leaf of leaves) {
      const neighbor = neighbors[leaf].values().next().value as number

      neighbors[neighbor].delete(leaf)

      if (neighbors[neighbor].size === 1) new_leaves.push(neighbor)
    }
    leaves = new_leaves
  }

  return leaves
}
