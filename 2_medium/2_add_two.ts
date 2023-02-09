class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/* 

Add Two Numbers

leetcode medium question - https://leetcode.com/problems/add-two-numbers/
*/

export function addTwo(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  // two pointers
  let p1 = l1
  let p2 = l2
  // pointer to result start
  let head = new ListNode(0, null)
  // update current sums node
  let curr = head

  let over = 0 // 0|1

  // loop over both lists

  while (p1 || p2 || over) {
    let sum = (p1?.val || 0) + (p2?.val || 0) + over
    if (sum > 9) {
      sum = sum % 10
      over = 1
    } else {
      over = 0
    }
    curr.next = new ListNode(sum, null)
    curr = curr.next
    if (p1) p1 = p1.next as ListNode
    if (p2) p2 = p2.next as ListNode
  }

  return head.next
}
