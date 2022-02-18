/*
  We use binary search to achieve O(logn) time
  complexity with O(1) space complexity.
*/
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] < nums[right]) return nums[left];

    if (nums[left] < nums[mid]) {
      left = mid + 1;
    }

    if (nums[mid] < nums[right]) {
      right = mid - 1;
    }
  }
}
