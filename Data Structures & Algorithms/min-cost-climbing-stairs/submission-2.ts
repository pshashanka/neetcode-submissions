class Solution {

    #memo: Map<number, number>

    constructor() {
        this.#memo = new Map<number, number>()
    }
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {

        this.#memo.set(0, cost[0])
        this.#memo.set(1, cost[1])

        const recur = (n: number) => {
            if (this.#memo.has(n)) {
                return this.#memo.get(n)
            }

            if (n < 0) {
                return 0
            }

            const r = cost[n] + Math.min(recur(n - 1), recur(n - 2))
            this.#memo.set(n, r)
            return r
        }

        const c = cost.length - 1
        return Math.min(recur(c), recur(c - 1))
    }
}
