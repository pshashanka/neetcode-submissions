class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d = defaultdict(int)
        ans = list()
        for n in nums:
            d[n] += 1
        topFrequencies = (sorted(d.values(), reverse=True))[:k]
        for num,frequency in d.items():
            if frequency in topFrequencies:
                ans.append(num)
        return ans
    