/*
Flatten Nested List Iterator

Leetcode medium question - https://leetcode.com/problems/flatten-nested-list-iterator/
*/

class NestedInteger {
  constructor(value?: number) {}

  isInteger(): boolean {
    return true
  }

  getInteger(): number | null {
    return null
  }

  setInteger(value: number) {}

  add(elem: NestedInteger) {}

  getList(): NestedInteger[] {
    return []
  }
}

class NestedIterator {
  private nums: number[]
  private idx: number

  constructor(nestedList: NestedInteger[]) {
    this.idx = 0
    this.nums = []
    for (const int of nestedList) {
      this.flatten(int)
    }
  }

  hasNext(): boolean {
    if (!isNaN(this.nums[this.idx + 1])) return true
    return false
  }

  next(): number {
    this.idx++
    return this.nums[this.idx]
  }

  private flatten(int: NestedInteger): void {
    if (int.isInteger()) {
      this.nums.push(int.getInteger()!)
      return
    }
    for (const nestedInt of int.getList()) {
      this.flatten(nestedInt)
    }
  }
}
