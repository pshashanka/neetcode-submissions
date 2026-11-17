class MinStack:

    def __init__(self):
        self._stack = []
        self._mins = []
        

    def push(self, val: int) -> None:
        self._stack.append(val)
        if self._mins:
            self._mins.append(min(val, self._mins[-1]))
        else:
            self._mins.append(val)
        

    def pop(self) -> None:
        popped = self._stack.pop()
        self._mins.pop()

        

    def top(self) -> int:
        return self._stack[-1]
        

    def getMin(self) -> int:
        return self._mins[-1]
        
