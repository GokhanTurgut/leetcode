/*
  With this solution we use stack data
  structure and create a new sorted array
  to achieve O(n) time complexity. But we
  also increase our memory consumption with
  O(n) space complexity.
*/
function sortedSquares(nums) {
  const newNums = [];
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      stack.push(Math.abs(nums[i]));
    }
  }
  let current = stack.pop();
  let counter = 0;
  while (counter < nums.length) {
    if (nums[counter] > -1) {
      if (!current) {
        newNums.push(nums[counter] ** 2);
        counter++;
      } else if (nums[counter] < current) {
        newNums.push(nums[counter] ** 2);
        counter++;
      } else {
        newNums.push(current ** 2);
        current = stack.pop();
      }
    } else counter++;
  }
  while (current) {
    newNums.push(current ** 2);
    current = stack.pop();
  }
  return newNums;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
