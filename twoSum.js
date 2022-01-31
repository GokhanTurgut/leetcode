// Hash table solution, O(n) Time Complexity, O(n) Space Complexity
function twoSum(nums, target) {
  const previous = {};

  for (let i = 0; i < nums.length; i++) {
    if (previous[(target - nums[i])]) {
      return [previous[(target - nums[i])], i]
    }
    previous[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15],9));