/* 
Linked List Random Node

Leetcode medium - https://leetcode.com/problems/linked-list-random-node/
*/

class Solution {
  private head: ListNode | null
  private list: number[]

  constructor(head: ListNode | null) {
    this.head = head
    this.list = []
    let curr = this.head

    while (curr) {
      this.list.push(curr.val)
      curr = curr.next
    }
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)]
  }
}
