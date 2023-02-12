/*
Reverse linked list

Leetcode eeasy question - https://leetcode.com/problems/reverse-linked-list/description/
*/

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head

  let previous: ListNode | null = null
  let current: ListNode | null = head
  let next: ListNode | null

  while (current.next) {
    next = current.next
    current.next = previous
    previous = current
    current = next
  }
  current.next = previous

  return current
}

// steroids solution

function reverse_list(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  while (head) {
    ;[head.next, prev, head] = [prev, head, head.next]
  }
  return prev
}
