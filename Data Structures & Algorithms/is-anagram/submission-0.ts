class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s: string, t: string): boolean {
    //     return s.split('').sort().join() === t.split('').sort().join()
    // }

    isAnagram(s: string, t: string): boolean {
        const __map = {}
        for(const c of s) {
            __map[c] = __map[c] ? __map[c] + 1 : 1;
        }
        for(const c of t) {
            if(__map[c]) {
                __map[c] = __map[c] ? __map[c] - 1 : 0;
                
                if (!__map[c]) {
                    delete __map[c];
                }

            } else {
                return false;
            }
        }

        return  Object.keys(__map).length === 0;
    }
}
