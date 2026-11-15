class LRUCache {
    private cache: Map<number, number>
    private keyStack: Array<number>
    private capacity: number
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.keyStack = []
        this.cache = new Map()
    }

    private updateKeyPos(key: number) {
        if(this.cache.has(key)) {
            const index = this.keyStack.indexOf(key)
            if (index >= 0) {
               this.keyStack.splice(index, 1)
            }
            
            this.keyStack.push(key)
        }
    }

    private updateKeyStack(key: number) {
        if(this.keyStack.length >= this.capacity) {
            const evicted = this.keyStack.shift()
            // console.log('evited', evicted)
            if(evicted !== undefined) {
                this.cache.delete(evicted)
            }
        }
        this.keyStack.push(key)
        // console.log(this.keyStack)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        // console.log('get', key)
        this.updateKeyPos(key)
        return this.cache.has(key) ? this.cache.get(key) : -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        // console.log('put', key)
        if(!this.cache.has(key)) {
            // make space
            this.updateKeyStack(key)
        } else {
            this.updateKeyPos(key)
        }
        this.cache.set(key, value)

    }
}
