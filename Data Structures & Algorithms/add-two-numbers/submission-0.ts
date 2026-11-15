/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const head = new ListNode()
        let ans = 0
        let carry = 0
        let temp = head
        while(l1 || l2) {
            ans = l1?.val || 0
            ans += l2?.val || 0
            ans += carry
            
            carry = Math.floor(ans / 10)
            ans = (ans % 10)
            console.log(carry, ans)
            if(l1) {
                l1 = l1.next
            }
            if(l2) {
                l2 = l2.next
            }

            temp.val = ans
            if (l1 || l2) {
                const temp2 = new ListNode()
                temp.next = temp2
                temp = temp.next
            }
        }

        if (carry > 0) {
            const temp2 = new ListNode(carry, null)
            temp.next = temp2
        }        

        return head
    }
}
