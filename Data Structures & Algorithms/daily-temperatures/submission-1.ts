type StackObj = {
    temperature: number,
    position: number
}

class Solution {

    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array<number>(temperatures.length)
        const stack = new Array<StackObj>()
        res.fill(0)
        stack.push({temperature: temperatures[0], position: 0})
        for(let i = 1; i < temperatures.length; i++) {
            const curr = temperatures[i]
            let j = i
            while(stack.length) {
                const {temperature: last, position: lpos} = stack.pop()
                j--
                if(last < curr) {
                    res[lpos] = i-lpos
                } else{
                    stack.push({temperature: last, position: lpos})
                    break;
                }
            }
            stack.push({temperature: curr, position: i})
        }

        return res
    }
}
