// Using Kadane's Algorithm to solve it with O(n) time complexity
function maxSubArray(nums) {
  let globalMax = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))