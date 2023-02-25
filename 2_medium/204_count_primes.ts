/*
Count primes

Leetcode medium question - https://leetcode.com/problems/count-primes/
*/

function countPrimes(n: number): number {
  if (n <= 1) return 0
  const primes = Array(n).fill(1)
  primes[0] = 0
  primes[1] = 0

  let i = 2
  while (i < n) {
    let j = i
    if (primes[i]) {
      j += i
      while (j < n) {
        primes[j] = 0
        j += i
      }
    }
    i++
  }
  return primes.reduce((sum, n) => sum + n, 0)
}
