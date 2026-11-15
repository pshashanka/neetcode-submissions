class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        thisDict = {}
        for i,v in enumerate(nums):
            diff = target - v
            if diff in thisDict:
                return [thisDict[diff], i]
            thisDict[v] = i
        return []
