/* 
Sum Root to Leaf Numbers

Leetcode medium - https://leetcode.com/problems/sum-root-to-leaf-numbers/
*/
function sumNumbers(root: TreeNode | null): number {
  const dfs = (curr: TreeNode | null, sum: number): number => {
    if (!curr) return 0

    sum = sum * 10 + curr.val
    if (!curr.left && !curr.right) return sum

    return dfs(curr.left, sum) + dfs(curr.right, sum)
  }

  return dfs(root, 0)
}
