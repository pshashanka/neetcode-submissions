class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: string | null = null;
}

class Solution {
    findWords(board: string[][], words: string[]): string[] {
        const root = new TrieNode();

        // Build the Trie
        for (const word of words) {
            let node = root;

            for (const ch of word) {
                if (!node.children.has(ch)) {
                    node.children.set(ch, new TrieNode());
                }

                node = node.children.get(ch)!;
            }

            // Store the complete word at its terminal node
            node.word = word;
        }

        const rows = board.length;
        const cols = board[0].length;
        const result: string[] = [];

        const dfs = (r: number, c: number, parent: TrieNode): void => {
            // Boundary check
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols
            ) {
                return;
            }

            const ch = board[r][c];

            // '#' means this cell is already used in the current path
            if (ch === '#') {
                return;
            }

            // No Trie path means no word has this prefix
            const node = parent.children.get(ch);
            if (!node) {
                return;
            }

            // Found a complete word
            if (node.word !== null) {
                result.push(node.word);

                // Prevent adding the same word more than once
                node.word = null;
            }

            // Mark this cell as visited
            board[r][c] = '#';

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            // Restore the cell for other paths
            board[r][c] = ch;

            /*
             * Optional pruning:
             * If this Trie node has no remaining words below it,
             * remove it from its parent to avoid future searches.
             */
            if (node.children.size === 0 && node.word === null) {
                parent.children.delete(ch);
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}