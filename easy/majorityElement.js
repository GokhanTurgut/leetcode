/*
  After we sort the array the number with 
  the frequency of greater than n/2 will be
  in the middle then we return that number.
  O(nlogn) time and O(1) space complexity.
*/
function majorityElement(nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}
