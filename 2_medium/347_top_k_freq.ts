/* 
Top K Frequent Elements

Leetcode medium question - https://leetcode.com/problems/top-k-frequent-elements/
*/

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>()
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
  }

  const counts: number[][] | null = Array(nums.length + 1).fill(null)

  for (const [key, val] of freq.entries()) {
    counts[val] ??= []
    counts[val].push(+key)
  }

  let output: number[] = []
  let j = counts.length

  while (output.length < k) {
    j--
    if (!counts[j]) continue
    for (const num of counts[j]) output.push(num)
  }

  return output
}
