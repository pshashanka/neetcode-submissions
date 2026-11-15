class MinStack {
    private _min: number;
    private _arr: Array<number>;
     
    constructor() {
        this._min = Number.MAX_SAFE_INTEGER
        this._arr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this._min = Math.min(val, this._min)
        this._arr.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this._arr.pop()
        this._min = Math.min(...this._arr)
    }

    /**
     * @return {number}
     */
    top(): number {
        return this._arr[this._arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this._min
    }
}
