class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Array<number>(26).fill(0);
        let l = 0;
        let maxf = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            const idx = s.charCodeAt(r) - 65;
            count[idx]++;
            maxf = Math.max(maxf, count[idx]);

            while (r - l + 1 - maxf > k) {
                count[s.charCodeAt(l) - 65]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
