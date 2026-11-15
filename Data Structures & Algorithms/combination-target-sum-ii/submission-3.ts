class Solution {
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);

        const ans: number[][] = [];
        this.dfs(candidates, 0, [], target, ans);

        return ans;
    }

    dfs(
        nums: number[],
        start: number,
        subset: number[],
        target: number,
        res: number[][]
    ): void {
        if (target === 0) {
            res.push(subset.slice());
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Avoid duplicate combinations
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            // nums is sorted, so all later values are also too large
            if (nums[i] > target) {
                break;
            }

            subset.push(nums[i]);
            this.dfs(nums, i + 1, subset, target - nums[i], res);
            subset.pop();
        }
    }
}