/* 
Gas Station

Leetcode medium question - https://leetcode.com/problems/gas-station/
*/

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0
  let curr = 0
  let result = 0
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i]
    curr += gas[i] - cost[i]
    if (curr < 0) {
      result = i + 1
      curr = 0
    }
  }

  return total < 0 ? result : -1
}
