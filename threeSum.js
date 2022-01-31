function threeSum(nums) {
  const result = [];
  // Sorting the array with O(nlogn) time complexity
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // No duplicates
    // Two pointers just like twoSum sorted version
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) start++; // No duplicates
        while (nums[end] === nums[end - 1]) end--; // No duplicates
        start++;
        end--;
      } else if (sum < 0) start++;
      else end--;
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
