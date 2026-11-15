class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const ans: number[] = []
        for(let i = 0; i < nums.length; i++){
            
            if ( (i > 0) && (nums[i] != 0)) {
                const cached = ans[0]
                // this wont work if nums[i] <= 0
                const res =  nums[0] * (cached / nums[i])
                ans.push(res)

            } else {
                let product = 1
                for(let j = 0; j < nums.length; j++) {
                    if (i !== j) {
                        product *= nums[j]
                    }
                    
                }
                ans.push(product)
            }

            
        }

        console.log(ans)

        return ans
    }
}
