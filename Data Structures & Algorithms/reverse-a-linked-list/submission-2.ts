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
reverseList(head: ListNode | null): ListNode | null {
    // 1. base case: empty or single node → return head as-is
    if (!head || !head.next) return head;

    // 2. recurse — this gives you the NEW head of the reversed rest
    const newHead = this.reverseList(head.next);

    // 3. fix the pointers:
    //    head.next is the tail of the reversed rest.
    //    Make it point back to head, then cut head's old next.
    head.next.next = head;
    head.next = null;

    // 4. return the new head, not head
    return newHead;
}
}
