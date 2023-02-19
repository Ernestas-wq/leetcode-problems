/* 
Accounts Merge

Leetcode medium question - https://leetcode.com/problems/accounts-merge/
*/
function accountsMerge(accounts: string[][]): string[][] {
  const graph: Record<string, Set<string>> = {}
  const email_to_name: Record<string, string> = {}

  // build graph
  for (const account of accounts) {
    const name = account[0]

    for (let i = 1; i < account.length; i++) {
      const email = account[i]
      email_to_name[email] = name
      if (!(account[1] in graph)) graph[account[1]] = new Set()
      if (!(email in graph)) graph[email] = new Set()

      graph[email].add(account[1])
      graph[account[1]].add(email)
    }
  }

  // build output
  const output: string[][] = []
  const visited = new Set()

  for (const email in graph) {
    if (!visited.has(email)) {
      const stack = [email]
      visited.add(email)
      const local_res: string[] = []

      while (stack.length) {
        const node = stack.pop() as string
        local_res.push(node)

        for (const edge of Array.from(graph[node])) {
          if (!visited.has(edge)) {
            stack.push(edge)
            visited.add(edge)
          }
        }
      }
      output.push([email_to_name[email], ...local_res.sort()])
    }
  }

  return output
}
