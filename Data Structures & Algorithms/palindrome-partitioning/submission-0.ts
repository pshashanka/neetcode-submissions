class Solution {
    partition(s: string): string[][] {
        const ans: string[][] = [];
        const part: string[] = [];

        const isPalindrome = (left: number, right: number): boolean => {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        };

        const dfs = (start: number): void => {
            if (start === s.length) {
                ans.push([...part]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                if (!isPalindrome(start, end)) {
                    continue;
                }

                part.push(s.slice(start, end + 1));
                dfs(end + 1);
                part.pop();
            }
        };

        dfs(0);
        return ans;
    }
}