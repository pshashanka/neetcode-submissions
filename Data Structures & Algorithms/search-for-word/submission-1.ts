class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        const ROWS = board.length
        const COLS = board[0].length
        const path = new Set()

        const key = (r: number, c: number): string => [r,c].join('|')

        const dfs = (r: number,c: number,i: number) => {
            if(i === word.length) {
                return true
            }

            if( r < 0 || c < 0 || r >= ROWS || c >= COLS) {
                return false
            }
            
            if( board[r][c] != word[i] || path.has(key(r,c))) {
                return false
            }

            path.add(key(r,c))
            const res = dfs(r+1,c,i+1) ||   
                        dfs(r-1,c,i+1) || 
                        dfs(r,c+1,i+1) || 
                        dfs(r,c-1,i+1)

            path.delete(key(r,c))
            return res
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(dfs(r,c,0)) {
                    return true
                }
            }
        }

        return false
        
    }
}
