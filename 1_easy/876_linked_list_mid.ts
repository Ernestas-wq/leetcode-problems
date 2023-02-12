class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/*

 Middle of the Linked List

Leetcode easy question - https://leetcode.com/problems/middle-of-the-linked-list/description/
*/
function middleNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next as ListNode
    fast = fast.next.next as ListNode
  }
  return slow
}
