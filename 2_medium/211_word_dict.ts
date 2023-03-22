/*
Design Add and Search Words Data Structure

Leetcode medium - https://leetcode.com/problems/design-add-and-search-words-data-structure/
*/

class TrieNode {
  children: Map<string, TrieNode>
  isWord: boolean

  constructor() {
    this.children = new Map<string, TrieNode>()
    this.isWord = false
  }
}

class WordDictionary {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  addWord(word: string): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i)
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char)!
    }
    node.isWord = true
  }

  search(word: string): boolean {
    return this.searchHelper(word, 0, this.root)
  }

  private searchHelper(word: string, index: number, node: TrieNode): boolean {
    if (index === word.length) {
      return node.isWord
    }

    const char = word.charAt(index)
    if (char !== ".") {
      if (!node.children.has(char)) {
        return false
      }
      return this.searchHelper(word, index + 1, node.children.get(char)!)
    }

    for (const child of node.children.values()) {
      if (this.searchHelper(word, index + 1, child)) {
        return true
      }
    }

    return false
  }
}
