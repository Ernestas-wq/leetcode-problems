/* 
Group Anagrams

Leetcode medium question - https://leetcode.com/problems/group-anagrams/

*/

// my solution time complexity O(m * nlogn)
// m amount of strs, n - avg length of str
function groupAnagrams(strs: string[]): string[][] {
  const map: { [id: string]: string[] } = {}
  for (const s of strs) {
    const sortedStr = [...s].sort().join()
    if (sortedStr in map) {
      map[sortedStr].push(s)
    } else {
      map[sortedStr] = [s]
    }
  }

  return Object.values(map)
}

// other solution complexity - O(m * n)

function group_anagrams(strs: string[]): string[][] {
  const map: { [id: string]: string[] } = {}

  for (const str of strs) {
    const count: number[] = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - "a".charCodeAt(0)
      count[index] = count[index] + 1
    }

    const key = count.join(",")
    if (key in map) {
      map[key].push(str)
    } else {
      map[key] = [str]
    }
  }

  return Object.values(map)
}
