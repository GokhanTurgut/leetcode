/*
  First solution with hash table that has the
  worst run time of all three solutions.
  One easy thing I could have done in this
  solution is to check only the beginning 
  numbers of the sequence.
*/
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  const numsHash = {};
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    let sequence = 1;
    let counter = 1;
    while (numsHash[nums[i] - counter]) {
      sequence++;
      counter++;
    }
    counter = 1;
    while (numsHash[nums[i] + counter]) {
      sequence++;
      counter++;
    }
    max = Math.max(max, sequence);
    numsHash[nums[i]] = true;
  }
  return max;
}
/*
  Second solution of mine that I have tried 
  out of curiosity. This solution is the
  most intuitive and naive one that I have
  thought when I first saw the question but
  interestingly this solution is the most
  runtime and memory efficient one according to 
  the leetcode results. Which is interesting
  because technically this solution has O(nlogn)
  time complexity because of the sorting operation and
  last solution with O(n) time complexity should be
  more efficient on paper but not according to the results.
*/
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  counter = 1;
  max = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1 || nums[i + 1] - nums[i] === -1) counter++;
    else if (nums[i + 1] - nums[i] === 0) continue;
    else {
      max = Math.max(max, counter);
      counter = 1;
    }
  }
  max = Math.max(max, counter);
  return max;
}
/*
  Last solution that I have tried once I have
  looked into the discussion section of the problem
  to see what is the most optimal way to solve this
  question. Using a set to store nums array and check
  to see if the current number in the loop is a beginning
  number of a sequence, if that is the case calculate the
  length of the sequence using a counter variable. After
  that update the max variable and at the end return the
  max variable. O(n) time complexity and O(n) space complexity.
*/
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  const numsSet = new Set(nums);
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let counter = 1;
      while (numsSet.has(nums[i] + counter)) {
        counter++;
      }
      max = Math.max(max, counter);
    }
  }
  return max;
}
