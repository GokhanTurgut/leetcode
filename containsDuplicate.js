function containsDuplicate(nums) {
  const previous = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (typeof previous[nums[i]] === 'number') {
      return true;
    }
    previous[nums[i]] = i;
  }
  return false;
}