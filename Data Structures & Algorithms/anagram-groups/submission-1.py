class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = [[]]
        anaDict = {}
        for item in strs:
            key = tuple(sorted(item))
            if key in anaDict:
                anaDict[key].append(item)
            else:
                anaDict[key] = [item]
        return list(anaDict.values())

        