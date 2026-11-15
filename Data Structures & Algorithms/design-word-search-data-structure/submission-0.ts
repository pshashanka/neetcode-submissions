class TrieNode {
    children: Record<string, TrieNode> = {};
    isWord: boolean = false;
}

class WordDictionary {
    private rootNode: TrieNode;

    constructor() {
        this.rootNode = new TrieNode();
    }

    addWord(word: string): void {
        let t = this.rootNode;
        for (const c of word) {
            if (!t.children[c]) t.children[c] = new TrieNode();
            t = t.children[c];
        }
        t.isWord = true;
    }

    private dfs(word: string, i: number, node: TrieNode): boolean {
        // Base case: consumed the entire word
        if (i === word.length) return node.isWord;

        const c = word[i];

        if (c === '.') {
            // Branch into every child; succeed if ANY works
            for (const child of Object.values(node.children)) {
                if (this.dfs(word, i + 1, child)) return true;
            }
            return false;
        }

        const next = node.children[c];
        if (!next) return false;
        return this.dfs(word, i + 1, next);
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.rootNode);
    }
}