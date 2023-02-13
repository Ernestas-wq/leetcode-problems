/*
 K Closest Points to Origin

Leetcode medium question - https://leetcode.com/problems/k-closest-points-to-origin/

*/

function kClosest(points: number[][], k: number): number[][] {
  points.sort((a, b) => {
    return (
      Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) -
      Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))
    )
  })

  return points.slice(0, k)
}
