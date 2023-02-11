class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
/* 
Sort List

Leetcode medium question https://leetcode.com/problems/sort-list/

*/

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let left: ListNode | null = head
  let right: ListNode | null = mid(head)

  let tmp = right.next
  right.next = null
  right = tmp as ListNode

  left = sortList(left)
  right = sortList(right)

  return merge(left, right)
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let curr
  let tail
  curr = tail = new ListNode()

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  if (!l1) curr.next = l2
  if (!l2) curr.next = l1

  return tail.next
}

function mid(head: ListNode): ListNode {
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next as ListNode
  }

  return slow
}
