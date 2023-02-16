/* 
Implement trie

Leetcode medium question - https://leetcode.com/problems/implement-trie-prefix-tree/

*/

type TrieNode = {
  children: Map<string, TrieNode>
  isEnd: boolean
}

class Trie {
  private root: TrieNode
  constructor() {
    this.root = {
      children: new Map<string, TrieNode>(),
      isEnd: false,
    }
  }

  insert(word: string): void {
    let curr = this.root
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, {
          children: new Map<string, TrieNode>(),
          isEnd: false,
        })
      }
      curr = curr.children.get(c) as TrieNode
    }

    curr.isEnd = true
  }

  search(word: string): boolean {
    let curr = this.root
    for (const c of word) {
      curr = curr.children.get(c) as TrieNode
      if (!curr) return false
    }
    return curr.isEnd
  }

  startsWith(prefix: string): boolean {
    let curr = this.root
    for (const c of prefix) {
      curr = curr.children.get(c) as TrieNode
      if (!curr) return false
    }
    return true
  }
}
