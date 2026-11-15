class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string{
        const ans = []
        for (const str of strs) {
            ans.push(`${str.length}-${btoa(str)}`)
        }
        return ans.join()
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []
        console.log(str)
        if(str !== null) {
            const arrEncoded = str.split(',')
            for(const item of arrEncoded) {
                const arrItem = item.split('-')
                const l = parseInt(arrItem[0])
                if(l >= 0) {
                    res.push(atob(arrItem[1]))
                }
                
            }
        }

        return res
    }
}
