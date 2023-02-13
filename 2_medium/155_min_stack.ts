/* 
 Min stack

Leetcode medium question https://leetcode.com/problems/min-stack/description/

*/

// my solution
type StackNode<T> = {
  val: T
  next?: StackNode<T>
  prev_min?: StackNode<T>
}

class MinStack {
  private length: number
  private head?: StackNode<number>
  private min?: StackNode<number>
  constructor() {
    this.length = 0
    this.head = undefined
    this.min = undefined
  }

  push(val: number): void {
    const node = { val } as StackNode<number>
    this.length++
    if (this.length === 1) {
      this.head = node
      this.min = node
      return
    }

    if (val <= this.min!.val) {
      node.prev_min = this.min
      this.min = node
    }
    node.next = this.head
    this.head = node
  }

  pop(): void {
    this.length--
    if (!this.length) {
      this.head = undefined
      this.min = undefined
      return
    }
    if (this.head === this.min) {
      this.min = this.min!.prev_min
    }
    this.head = this.head!.next
  }

  top(): number {
    if (!this.head) return -1
    return this.head.val
  }

  getMin(): number {
    return this.min!.val
  }
}

// other solution
class MinStack2 {
  stack: number[]
  minstack: number[]

  constructor() {
    this.stack = []
    this.minstack = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (
      val < this.minstack[this.minstack.length - 1] ||
      this.minstack.length === 0
    ) {
      this.minstack.push(val)
    } else {
      this.minstack.push(this.minstack[this.minstack.length - 1])
    }
  }

  pop(): void {
    this.stack.pop()
    this.minstack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minstack[this.minstack.length - 1]
  }
}
