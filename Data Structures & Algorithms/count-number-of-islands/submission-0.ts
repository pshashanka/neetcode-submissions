class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length
        const key = (r,c) => [r,c].join('|')
        const visited = new Set()
        

        const dfs = (r,c) => {
            if(r < 0 || r >= ROWS || c < 0 || c >= COLS) {
                return
            }
            if(visited.has(key(r,c))) {
                return
            }
            if(grid[r][c] === '0') {
                return
            }


            visited.add(key(r,c))
            dfs(r - 1, c)          
            dfs(r + 1, c)          
            dfs(r, c - 1)          
            dfs(r, c + 1)     
        }

        let islands = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // Every unvisited land cell starts a new island
                if (grid[r][c] === '1' && !visited.has(key(r, c))) {
                    islands++;
                    dfs(r, c);
                }
            }
        }

        return islands
    }
}
