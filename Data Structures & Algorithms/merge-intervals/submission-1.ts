class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const __sorted = intervals.sort((a,b) => {
            if(a[0] <= b[0]) {
                return a[1] - b[1]
            } else {
                return a[0] - b[0]
            }
        })

        const stack = []
        for(const i of __sorted){
            let newInterval = i
            while(stack.length) {
                const last = stack.pop()

                if (last[0] <= newInterval[0]) {
                  const start = last[0]

                  if (last[1] < newInterval[0]) {
                    stack.push(last)
                    break                    
                  }

                  const end = Math.max(last[1], newInterval[1])
                  newInterval = [start, end]
                }
              
            }
            stack.push(newInterval)
        }
        return stack
    }
}
