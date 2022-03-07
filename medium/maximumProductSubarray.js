// Because of negative numbers we need to keep track
// of minimum value as well, with this solution we have
// O(n) time complexity and O(1) space complexity
function maxProduct(nums) {
  let result = nums[0];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(max * nums[i], min * nums[i], nums[i]);
    min = Math.min(temp * nums[i], min * nums[i], nums[i]);

    result = Math.max(max, result);
  }
  return result;
}

console.log(maxProduct([-2, 0, -1]));
