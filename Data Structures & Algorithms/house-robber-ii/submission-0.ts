class Solution {
    rob(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        return Math.max(
            this.robRange(nums, 0, nums.length - 2),
            this.robRange(nums, 1, nums.length - 1)
        );
    }

    private robRange(nums: number[], start: number, end: number): number {
        const memo = new Map<number, number>();

        const dfs = (i: number): number => {
            if (i > end) {
                return 0;
            }

            if (memo.has(i)) {
                return memo.get(i)!;
            }

            const robCurrent = nums[i] + dfs(i + 2);
            const skipCurrent = dfs(i + 1);

            const result = Math.max(robCurrent, skipCurrent);
            memo.set(i, result);

            return result;
        };

        return dfs(start);
    }
}