class Solution {

    productExceptSelf(nums: number[]): number[] {
        const prefix = [1]
        const suffix = []
        for(let i = 1; i < nums.length; i++){
            prefix.push(prefix[i-1] * nums[i-1])
        }
        suffix[nums.length - 1] = 1
        for(let i = nums.length - 2; i >= 0; i--){
            suffix[i] = suffix[i+1] * nums[i+1]
        }
        console.log(prefix)
        console.log(suffix)
        const ans = []
        for(let i = 0; i < nums.length; i++){
            ans[i] = prefix[i] * suffix[i]
        }
        return ans
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf2(nums: number[]): number[] {
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
