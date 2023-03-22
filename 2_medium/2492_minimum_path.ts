/*
Minimum Score of a Path Between Two Cities

Leetcode medium https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description/
*/

function minScore(n: number, roads: number[][]): number {
  const adjList: Record<number, number[][]> = {}

  for (const [source, destination, distance] of roads) {
    adjList[source] ??= []
    adjList[destination] ??= []

    adjList[source].push([destination, distance])
    adjList[destination].push([source, distance])
  }

  const visited = new Set<number>()
  let result = Infinity
  function dfs(i: number) {
    if (visited.has(i)) return

    visited.add(i)

    for (const [neigh, dist] of adjList[i]) {
      result = Math.min(dist, result)
      dfs(neigh)
    }
  }

  dfs(1)

  return result
}
