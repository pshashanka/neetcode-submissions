class MinStack:

    def __init__(self):
        self._stack = []
        self._min = float("-inf")
        

    def push(self, val: int) -> None:
        self._stack.append(val)
        self._min = min(self._min, val)
        

    def pop(self) -> None:
        popped = self._stack.pop()
        self._min = min(self._stack) if popped == self._min else self._min

        

    def top(self) -> int:
        return self._stack[-1]
        

    def getMin(self) -> int:
        return min(self._stack)
        
