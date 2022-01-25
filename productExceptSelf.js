/*
Solution with division, with a time complexity of O(n) and space complexity without the
result array O(1)

function productExceptSelf(nums) {
  const result = [1];
  let zeroCount = 0;
  let nonZeroValue;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      result[0] *= nums[i];
    }
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (zeroCount > 1) {
      if (i === 1) {
        result[i-1] = 0;
        result[i] = 0;
      } else {
        result[i] = 0;
      }
    }
    else if (zeroCount === 1) {
      if (i === 1) {
        nonZeroValue = result[0] * nums[0];
        result[0] = 0;
      }
      if (nums[i] === 0) {
        result[i] = nonZeroValue;
      } else {
        result[i] = 0;
      }
    } else {
      result[i] = result[i-1];
      result[i] = result[i] / nums[i] * nums[i-1];
    }
  }
  return result;
}
*/

// Solution without division
function productExceptSelf(nums) {
  const result = [];
  let right = 1;
  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  
  return result;
}
console.log(productExceptSelf([-1,1,0,-3,3]));