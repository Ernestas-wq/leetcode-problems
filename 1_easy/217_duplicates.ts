/* 

Contains duplicate

Leetcode easy question - https://leetcode.com/problems/contains-duplicate/description/
*/

export function containsDuplicate(nums: number[]): boolean {
  return new Set([...nums]).size !== nums.length
}
