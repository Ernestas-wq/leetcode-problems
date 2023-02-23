/*
Task Scheduler

Leetcode medium question - https://leetcode.com/problems/task-scheduler/
*/

function leastInterval(tasks: string[], n: number): number {
  // Create a hash table to count the occurrences of each task
  const taskCounts: {[key: string]: number} = {};
  for (const task of tasks) {
    if (task in taskCounts) {
      taskCounts[task]++;
    } else {
      taskCounts[task] = 1;
    }
  }
  
  // Get the maximum count of any task
  const values = Object.values(taskCounts)
  const maxCount = Math.max(...values);
  
  // Count the number of tasks that have the maximum count
  let maxCountTasks = 0;
  for (const count of values) {
    if (count === maxCount) {
      maxCountTasks++;
    }
  }
  
  // Calculate the minimum number of units of time required
  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxCountTasks);
}




