/*
  Binary search implementation for
  searching sorted lists with optimum
  efficiency. O(logn) time and O(1) space
  complexity.
*/
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (true) {
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    const middle = Math.floor((end + start) / 2);
    if (nums[middle] > target) {
      end = middle;
    } else if (nums[middle] < target) {
      start = middle;
    } else return middle;
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));
