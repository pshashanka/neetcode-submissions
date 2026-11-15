class TrieNode {
    children: { [key: string]: TrieNode } = {};
    isWord: boolean = false;
}


class PrefixTree {

    private rootNode

    constructor() {
        this.rootNode = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let temp = this.rootNode
        for(const c of word) {
            if(!temp[c]) {
                temp[c] = new TrieNode()
            }
            temp = temp[c]
            
        }
        temp.isWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let temp = this.rootNode
        for(const c of word) {
            temp = temp[c]
            if (!temp) {
                return false
            }
        }
        return temp?.isWord ?? false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let temp = this.rootNode
        for(const c of prefix) {
            temp = temp[c]
            if (!temp) {
                return false
            }
        }
        return temp ? true : false    
    }
}
