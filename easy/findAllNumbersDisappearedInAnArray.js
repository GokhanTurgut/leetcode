/*
  Normally I would solve this problem
  using a hash map but the follow up in 
  question description asks for an O(1)
  space complexity and after seeing the
  discussion section the clever way to
  achieve that would be modifying the nums
  array we receive but that would be
  really bad in normal conditions because 
  we should keep our functions pure and not
  modify the data we receive. Using indices
  in the array we check the indices that is
  included in the nums by making their value
  negative then we go through the array once
  again and push the indices with the positive
  values. O(n) time and O(1) space complexity.
*/
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}
