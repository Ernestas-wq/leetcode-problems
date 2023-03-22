/* 
Design browser history

Leetcode medium - https://leetcode.com/problems/design-browser-history/
*/

class BrowserHistory {
  private history: string[]
  private curr: number

  constructor(homepage: string) {
    this.history = [homepage]
    this.curr = 0
  }

  visit(url: string): void {
    // clear forward
    while (this.history.length - 1 > this.curr) {
      this.history.pop()
    }
    // add url
    this.history.push(url)
    // update current position
    this.curr = this.history.length - 1
  }

  back(steps: number): string {
    if (this.curr - steps < 0) {
      this.curr = 0
      return this.history[this.curr]
    }

    this.curr = this.curr - steps
    return this.history[this.curr]
  }

  forward(steps: number): string {
    if (this.curr + steps >= this.history.length) {
      this.curr = this.history.length - 1
      return this.history[this.curr]
    }

    this.curr = this.curr + steps
    return this.history[this.curr]
  }
}
