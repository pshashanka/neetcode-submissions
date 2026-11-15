class Solution {
    maxAreaOfIsland(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set<string>();
        const key = (r: number, c: number) => `${r}|${c}`;

        const dfs = (r: number, c: number): number => {
            // Out of bounds, water, or already visited
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                grid[r][c] === 0 ||
                visited.has(key(r, c))
            ) {
                return 0;
            }

            visited.add(key(r, c));

            // 1 for current cell + sum of all 4 adjacent directions
            return 1 +
                dfs(r + 1, c) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r, c - 1);
        };

        let maxArea = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1 && !visited.has(key(r, c))) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }

        return maxArea;
    }
}