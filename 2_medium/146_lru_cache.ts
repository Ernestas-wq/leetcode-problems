/* 
LRU Cache 

Leetcode medium question - https://leetcode.com/problems/lru-cache/
*/
// my solution
type Container<T> = {
  value: T
  next?: Container<T>
  prev?: Container<T>
}

class LRUCache {
  private capacity: number
  private length: number
  private head?: Container<number>
  private tail?: Container<number>
  private lookup: Map<number, Container<number>>
  private reverseLookup: Map<Container<number>, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.length = 0
    this.head = this.tail = undefined
    this.lookup = new Map()
    this.reverseLookup = new Map()
  }

  get(key: number): number {
    const node = this.lookup.get(key)
    if (!node) return -1
    this.detach(node)
    this.prepend(node)
    return node.value
  }

  put(key: number, value: number): void {
    let node = this.lookup.get(key)

    if (!node) {
      // create it
      node = { value } as Container<number>
      this.lookup.set(key, node)
      this.reverseLookup.set(node, key)
      this.length++
      this.prepend(node)
      this.trimCache()
      return
    }
    this.detach(node)
    this.prepend(node)
    node.value = value
  }

  private trimCache() {
    if (this.length <= this.capacity) return
    const tail = this.tail as Container<number>
    const key = this.reverseLookup.get(tail) as number
    this.lookup.delete(key)
    this.reverseLookup.delete(tail)
    this.detach(tail)
    this.length--
  }

  private detach(node: Container<number>): void {
    if (node.prev) {
      node.prev.next = node.next
    }
    if (node.next) {
      node.next.prev = node.prev
    }

    if (node === this.head) {
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = this.tail.prev
    }
    node.next = undefined
    node.prev = undefined
  }

  private prepend(node: Container<number>): void {
    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }
}

// hacky but smart solution

class LRU_Cache {
  capacity: number
  map: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key: number): number {
    const value = this.map.get(key)

    if (value === undefined) return -1

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key)
    this.map.set(key, value)

    return value
  }

  put(key: number, value: number): void {
    // remove last element to avoid overflow, only if it does not have
    // the inserted key is a new key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value
      this.map.delete(firstKey)
    }

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key)
    this.map.set(key, value)
  }
}
