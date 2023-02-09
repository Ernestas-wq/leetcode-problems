class NodeRandom {
  val: number
  next: NodeRandom | null
  random: NodeRandom | null
  constructor(val?: number, next?: NodeRandom, random?: NodeRandom) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}
/* 
Copy List with Random Pointer 

Leetcode medium question - https://leetcode.com/problems/copy-list-with-random-pointer/
*/
// my solution
function copyRandomList(head: NodeRandom | null): NodeRandom | null {
  const originalToIdx = new Map<NodeRandom, number>()
  const connections = new Map<number, number | undefined>()
  const copies: NodeRandom[] = []

  let idx = 0
  let curr = head
  while (curr) {
    originalToIdx.set(curr, idx)
    copies.push(new NodeRandom(curr.val))
    curr = curr.next
    idx++
  }
  curr = head
  idx = 0
  while (curr) {
    if (curr.random) connections.set(idx, originalToIdx.get(curr.random))
    curr = curr.next
    idx++
  }

  for (let i = 0; i < copies.length; i++) {
    copies[i].next = copies[i + 1] || null
    const connectionIdx = connections.get(i) as number
    copies[i].random = copies[connectionIdx] ?? null
  }

  return copies[0]
}
// other solution way better solution
function copy_random(head: NodeRandom | null): NodeRandom | null {
  if (!head) return null
  const map = new Map<NodeRandom | null, NodeRandom | null>()
  map.set(null, null)
  let curr: NodeRandom | null = head
  while (curr) {
    map.set(curr, new NodeRandom(curr.val))
    curr = curr.next
  }

  curr = head

  while (curr) {
    const copy = map.get(curr) as NodeRandom
    copy.next = map.get(curr.next) as NodeRandom | null

    copy.random = map.get(curr.random) as NodeRandom | null
    curr = curr.next
  }
  return map.get(head) as NodeRandom
}
