class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
/* 
Remove Nth Node From End of List

Leetcode medium question - https://leetcode.com/problems/remove-nth-node-from-end-of-list/

1 -> 2-> 3
*/
// my retard solution ( but somehow faster!)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null
  if (!head.next && n > 0) return null

  let capacity = 1
  let curr = head

  while (curr.next) {
    capacity++
    curr = curr.next
  }

  const deleteAt = capacity - n
  if (deleteAt === 0) return head.next
  curr = head
  capacity = 1

  while (curr.next) {
    if (deleteAt === capacity) {
      curr.next = curr.next.next
      break
    }
    capacity++
    curr = curr.next
  }

  return head
}

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null

  let dummy = new ListNode(0, head)

  let left = dummy
  let right = head

  while (n > 0) {
    right = right.next as ListNode
    n--
  }

  while (right) {
    left = left.next as ListNode
    right = right.next as ListNode
  }

  if (left.next) {
    left.next = left.next.next
  }

  return dummy.next
}
