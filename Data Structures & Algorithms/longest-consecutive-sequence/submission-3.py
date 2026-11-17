class Solution:

    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        num_set = set(nums)
        for k in num_set:
            local = 1

            if k-1 in num_set:
                continue

            while k+local in num_set:
                local += 1

            longest = max(longest, local)


        return longest


