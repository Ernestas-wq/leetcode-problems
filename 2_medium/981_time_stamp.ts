/*
Time Based Key-Value Store

https://leetcode.com/problems/time-based-key-value-store

*/

class TimeMap {
  map: Map<string, [string, number][]>

  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) this.map.set(key, [])

    this.map.get(key)!.push([value, timestamp])
  }

  get(key: string, timestamp: number): string {
    let result = ""

    const values = this.map.get(key) || []
    let l = 0
    let r = values.length - 1

    while (l <= r) {
      const m = Math.round((l + r) / 2)

      if (timestamp >= values[m][1]) {
        result = values[m][0]
        l = m + 1
      } else {
        r = m - 1
      }
    }

    return result
  }
}
