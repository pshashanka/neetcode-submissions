class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length === 0 || s.length < t.length) return ''

        const need = new Map<string, number>()
        for (const char of t) {
            need.set(char, (need.get(char) ?? 0) + 1)
        }

        const window = new Map<string, number>()
        const required = need.size // distinct chars that must be satisfied
        let formed = 0             // distinct chars currently satisfied
        let bestStart = 0
        let bestLen = Infinity

        let l = 0
        for (let r = 0; r < s.length; r++) {
            const c = s[r]
            if (need.has(c)) {
                window.set(c, (window.get(c) ?? 0) + 1)
                if (window.get(c) === need.get(c)) formed++
            }

            // Shrink from the left while the window is still valid
            while (formed === required) {
                if (r - l + 1 < bestLen) {
                    bestLen = r - l + 1
                    bestStart = l
                }
                const lc = s[l]
                if (need.has(lc)) {
                    window.set(lc, window.get(lc)! - 1)
                    if (window.get(lc)! < need.get(lc)!) formed--
                }
                l++
            }
        }

        return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen)
    }
}
