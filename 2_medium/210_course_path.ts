/* 
Course Schedule II

Leetcode medium question - https://leetcode.com/problems/course-schedule-ii/
*/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // make a graph with empty arrays

  const graph: Record<number, number[]> = Array(numCourses)
    .fill(null)
    .reduce((graph, _, i) => {
      graph[i] = []
      return { ...graph }
    }, {})

  // add connections
  for (const prereq of prerequisites) {
    const [from, to] = prereq
    graph[from].push(to)
  }

  const visited = new Set<number>()
  const cycle = new Set<number>()
  const output: number[] = []
  const dfs = (i: number) => {
    if (cycle.has(i)) return false
    if (visited.has(i)) return true
    cycle.add(i)
    for (const edge of graph[i]) {
      if (!dfs(edge)) return false
    }
    visited.add(i)
    cycle.delete(i)
    output.push(i)
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return []
  }

  return output
}
