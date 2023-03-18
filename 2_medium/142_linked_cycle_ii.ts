/* 
Linked List cycle(ii)

Leetcode medium question - https://leetcode.com/problems/linked-list-cycle-ii/
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return head
  const lookup = new Set<ListNode>()

  while (head) {
    if (lookup.has(head)) return head
    lookup.add(head)
    head = head.next
  }

  return null
}
