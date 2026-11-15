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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1) return list2
        if (!list2) return list1
        const head = new ListNode()
        let curr = head
        while(list1 || list2) {

            if (list1 && (!list2 || (list2 && list1.val <= list2.val))) {
                    curr.next = list1
                    list1 = list1.next
                    curr = curr.next
            }

            if (list2 && (!list1 || (list1 && list2.val <= list1.val))) {
                    curr.next = list2
                    list2 = list2.next
                    curr = curr.next
            }
            
            
        }

        return head.next
    }
}
