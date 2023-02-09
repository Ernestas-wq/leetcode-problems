/* 
Merge intervals

Leetcode medium question - https://leetcode.com/problems/merge-intervals/
*/
// my solution
export function merge(intervals: number[][]): number[][] {
  const output: number[][] = []
  // sort
  intervals = intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length; i++) {
    let [currStart, currEnd] = intervals[i]
    let [nextStart, nextEnd] = intervals[i + 1] || [null, null]
    // keep merging while currend end is >= next intervals start
    while (currEnd >= nextStart && i < intervals.length - 1) {
      currEnd = Math.max(currEnd, nextEnd)
      i++
      ;[nextStart, nextEnd] = intervals[i + 1] || [null, null]
    }
    output.push([currStart, currEnd])
  }
  return output
}

// other solution

function merge_2(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = []
  let current = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1])
    } else {
      result.push(current)
      current = intervals[i]
    }
  }
  result.push(current)
  return result
}
