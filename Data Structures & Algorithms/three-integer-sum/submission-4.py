from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        return self.kSum(nums, 0, 3)
        
    def kSum(self, nums: List[int], target: int, k: int) -> List[List[int]]:
        nums.sort()
        n = len(nums)

        def k_sum(start: int, target: int, k: int) -> List[List[int]]:
            result = []

            # Not enough values remaining
            if n - start < k:
                return result

            # Smallest possible sum is too large
            if sum(nums[start:start + k]) > target:
                return result

            # Largest possible sum is too small
            if sum(nums[n - k:n]) < target:
                return result

            # Base case: 2-Sum using two pointers
            if k == 2:
                left, right = start, n - 1

                while left < right:
                    total = nums[left] + nums[right]

                    if total == target:
                        result.append([nums[left], nums[right]])
                        left += 1
                        right -= 1

                        while left < right and nums[left] == nums[left - 1]:
                            left += 1

                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1

                    elif total < target:
                        left += 1
                    else:
                        right -= 1

                return result

            # Fix one value, then solve (k - 1)-Sum
            for i in range(start, n - k + 1):
                if i > start and nums[i] == nums[i - 1]:
                    continue

                # If even the smallest possible sum is too large,
                # later values will also be too large.
                if nums[i] + sum(nums[i + 1:i + k]) > target:
                    break

                # If this value plus the largest possible suffix
                # is still too small, try the next value.
                if nums[i] + sum(nums[n - (k - 1):]) < target:
                    continue

                suffixes = k_sum(
                    i + 1,
                    target - nums[i],
                    k - 1
                )

                for suffix in suffixes:
                    result.append([nums[i]] + suffix)

            return result

        return k_sum(0, target, k)