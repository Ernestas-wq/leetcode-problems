/*
Course Schedule

Leetcode medium question - https://leetcode.com/problems/course-schedule/description/

*/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map: Record<number, number[]> = Array(numCourses)
    .fill(null)
    .reduce((coll, _, i) => {
      coll[i] = []
      return { ...coll }
    }, {})

  for (let i = 0; i < prerequisites.length; i++) {
    const [from, to] = prerequisites[i]
    map[from].push(to)
  }

  const visited = new Set<number>()
  function dfs(i: number): boolean {
    if (visited.has(i)) return false
    if (map[i].length === 0) return true
    visited.add(i)
    for (const course of map[i]) {
      if (!dfs(course)) return false
    }
    visited.delete(i)
    map[i] = []
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }

  return true
}
