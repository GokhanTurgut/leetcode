/*
  Problem asks specifically for O(n) time and O(1)
  space complexity to achieve that we need a clever
  way to notice single occurring number. With this
  solution first we calculate the sum of nums array
  then we create a set from nums to eliminate duplication
  then we calculate the sum of this set. We know that if
  all numbers repeated two times in our nums array then the
  half of that would be the sum of our set. With that knowledge
  we calculate the missing piece.
*/
function singleNumber(nums) {
  const sum = nums.reduce((sum, num) => sum + num);
  const numSet = new Set(nums);
  let setSum = 0;
  numSet.forEach((num) => {
    setSum += num;
  });
  return (setSum - sum / 2) * 2;
}
