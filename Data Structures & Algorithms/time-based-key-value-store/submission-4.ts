


class TimeMap {
    
    private keyStore;

    constructor() {
        this.keyStore = new Map<string, Map<number, string>>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        let timeMap;
        if (this.keyStore.has(key)) {
            timeMap = this.keyStore.get(key)
        } else {
            timeMap = new Map<number, string>()
        }
        timeMap.set(timestamp, value)
        this.keyStore.set(key, timeMap)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (this.keyStore.has(key)) {
            const timeMap = this.keyStore.get(key)
            if (timeMap.has(timestamp)) {
                return timeMap.get(timestamp)
            }
            const times = [...timeMap.keys()].sort((a : number,b : number) => b - a)
            const timestamp_prev: number = times.find((t: number) => t <= timestamp)
            if (timeMap.has(timestamp_prev)) {
                return timeMap.get(timestamp_prev)
            }

            return ''
        }        
        return ''
    }
}
