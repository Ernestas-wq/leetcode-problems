/* 
Implement queue using stacks

Leetcode easy question - https://leetcode.com/problems/implement-queue-using-stacks/

*/

class MyQueue {
  private length: number
  private s1: number[]
  private s2: number[]

  constructor() {
    this.length = 0
    this.s1 = []
    this.s2 = []
  }

  push(x: number): void {
    this.length++
    this.s1.push(x)
  }

  pop(): number {
    if (!this.s1.length && !this.s2.length) throw new Error("empty")
    this.length--
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop() as number)
      }
    }
    return this.s2.pop() as number
  }

  peek(): number {
    if (!this.s1.length && !this.s2.length) throw new Error("empty")
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop() as number)
      }
    }
    return this.s2[this.s2.length - 1]
  }

  empty(): boolean {
    return !this.length
  }
}
