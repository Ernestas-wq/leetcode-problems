/* 
First Bad Version

Leetcode medium question - https://leetcode.com/problems/first-bad-version/description/
*/

const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1
    let right = n
    let ans = -1
    while (left <= right) {
      const mid = Math.floor((right + left) / 2)
      if (isBadVersion(mid)) {
        ans = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return ans
  }
}
