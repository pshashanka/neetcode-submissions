class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
findDuplicate(nums: number[]): number {
    let slow = 0;
    let fast = 0;

    // Phase 1: Detect the intersection inside the cycle
    do {
        slow = nums[slow];           // 1 step
        fast = nums[nums[fast]];     // 2 steps
    } while (slow !== fast);

    // Phase 2: Find the entrance to the cycle (the duplicate number)
    let slow2 = 0;
    while (slow !== slow2) {
        slow = nums[slow];           // 1 step
        slow2 = nums[slow2];         // 1 step
    }

    return slow;
}
}