/* 
Odd Even Linked List

Leetcode medium question - https://leetcode.com/problems/odd-even-linked-list/description/
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let odd = head
  let even = head.next
  let even_head = head.next

  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = even_head
  return head
}
