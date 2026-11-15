class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for item in strs:
            key = tuple(sorted(item))
            groups[key].append(item)
        return list(groups.values())

        