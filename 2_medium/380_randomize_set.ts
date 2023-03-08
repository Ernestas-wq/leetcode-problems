/*
Insert Delete GetRandom O(1)

Leetcode medium question https://leetcode.com/problems/insert-delete-getrandom-o1/
*/

class RandomizedSet {
  private valToIndex: Map<number, number>
  private list: number[]
  constructor() {
    this.valToIndex = new Map()
    this.list = []
  }

  insert(val: number): boolean {
    if (!this.valToIndex.has(val)) {
      this.valToIndex.set(val, this.list.length)
      this.list.push(val)
      return true
    }

    return false
  }

  remove(val: number): boolean {
    if (!this.valToIndex.has(val)) return false
    const indexToRemove = this.valToIndex.get(val)!
    const last = this.list.length - 1
    // update map
    this.valToIndex.set(this.list[last], indexToRemove)
    this.valToIndex.delete(val)

    // swap with last and pop last
    ;[this.list[indexToRemove], this.list[last]] = [
      this.list[last],
      this.list[indexToRemove],
    ]
    this.list.pop()

    return true
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)]
  }
}
