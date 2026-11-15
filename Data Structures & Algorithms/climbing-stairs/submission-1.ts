class Solution {

    #__map = new Map<number, number>()
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n == 1 || n == 2) {
            return n
        } 

        if(this.#__map.has(n)) {
            return this.#__map.get(n)
        }

        const a = this.climbStairs(n-1)
        this.#__map.set(n-1, a)
        const b = this.climbStairs(n-2)
        this.#__map.set(n-2, b)

        return a + b

    }
}
