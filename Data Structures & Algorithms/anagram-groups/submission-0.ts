class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const __map = new Map<string, [string]>();
        const ans = new Array<string>();
        const key = (x: string) => x.split('').sort().join('');

        for(const str of strs){
            const k = key(str);
            if(__map.has(k)) {
                const arr = __map.get(k);
                arr.push(str);
                __map.set(k, arr);
            } else {
                __map.set(k, [str]);
            }
        }


        return [...__map.values()];
    }
}
