class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        for(const c of s) {
            let last;
            switch(c) {
                case ')' :
                    last = stack.pop()
                    if (last != '(') {
                        return false
                    }
                    break;
                case '}' :
                    last = stack.pop()
                    if (last != '{') {
                        return false
                    }
                    break;                
                case ']' :
                    last = stack.pop()
                    if (last != '[') {
                        return false
                    }
                    break;      
                case '(':
                case '[':
                case '{':           
                    stack.push(c)
                    break
                default:
                    break         
            }
        }

        return stack.length ? false: true
    }
}
