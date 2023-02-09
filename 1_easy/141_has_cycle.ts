class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*

Linked List Cycle

leetcode easy question https://leetcode.com/problems/linked-list-cycle/

*/
// bad solution
export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  const visited = new Map<ListNode, boolean>()
  let curr = head

  while (curr.next) {
    if (visited.has(curr)) {
      return true
    }
    visited.set(curr, true)
    curr = curr.next
  }

  return false
}

// good solution

const hasCycle2 = (head: ListNode | null) => {
  if (!head) return false
  let fast = head
  while (fast && fast.next) {
    head = head.next as ListNode
    fast = fast.next.next as ListNode
    if (head === fast) return true
  }
  return false
}
