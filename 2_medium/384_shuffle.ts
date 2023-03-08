/*
Shuffle an Array

Leetcode medium - https://leetcode.com/problems/shuffle-an-array/
*/

class Solution {
  private initial: number[]
  private shuffled: number[]

  constructor(nums: number[]) {
    this.initial = [...nums]
    this.shuffled = nums
  }

  reset(): number[] {
    this.shuffled = [...this.initial]
    return this.shuffled
  }

  shuffle(): number[] {
    const idxs: number[] = this.shuffled.map((_, i) => i)
    const newShuffled = new Array(this.shuffled.length)

    for (const num of this.shuffled) {
      const randomIdx = Math.floor(Math.random() * idxs.length)
      newShuffled[idxs[randomIdx]] = num
      ;[idxs[randomIdx], idxs[idxs.length - 1]] = [
        idxs[idxs.length - 1],
        idxs[randomIdx],
      ]

      idxs.pop()
    }

    this.shuffled = newShuffled
    return this.shuffled
  }
}
