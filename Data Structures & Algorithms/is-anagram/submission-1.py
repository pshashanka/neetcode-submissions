class Solution:

    def getDict(self, argS: str) -> dict:
        m = dict()
        for i in argS:
            if i in m:
                m[i] = m[i] + 1
            else:
                m[i] = 1
        return m        

    def isAnagram(self, s: str, t: str) -> bool:
        a = self.getDict(s)
        b = self.getDict(t)
        return a == b


        