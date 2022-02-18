// To achieve O(logn) time complexity we need to use binary search
// and to account for the array rotation we adjusted the algorithm
// accordingly.
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
}

console.log(search([3, 1], 1));
