class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
/* 
Delete Node in a Linked List

Leetcode medium https://leetcode.com/problems/delete-node-in-a-linked-list/
*/

function deleteNode(node: ListNode | null): void {
  if (!node) return

  let prev: ListNode | null = null
  while (node.next) {
    ;[node.val, node.next.val] = [node.next.val, node.val]
    prev = node
    node = node.next
  }
  if (prev) prev.next = null
}
