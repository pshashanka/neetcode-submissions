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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let temp = head
        let tail = null
        while(head) {
            head = head.next
            temp.next = tail
            tail = temp
            if (head) {
                temp = head
            }
        } 
        
        return tail
    }
}
