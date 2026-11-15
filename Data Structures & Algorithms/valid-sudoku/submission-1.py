class Solution:

    def hasDuplicateNum(self, tList: List[str]) -> bool:
        tSet = set()
        for c in tList:
            if c.isdigit():
                if c in tSet:
                    return True
                else:
                    tSet.add(c)
        return False


    def isValidSudoku(self, board: List[List[str]]) -> bool:
        ROWS = len(board)
        COLS = len(board[0])

        for row in range(ROWS):
            if self.hasDuplicateNum(board[row]):
                return False

        for col in range(COLS):
            column = [board[row][col] for row in range(ROWS)]
            if self.hasDuplicateNum(column):
                return False

        for row in range(0, ROWS, 3):
            for col in range(0, COLS, 3):
                box = []
                for i in range(row, row + 3):
                    for j in range(col, col + 3):
                        box.append(board[i][j])
                if self.hasDuplicateNum(box):
                    return False

        return True