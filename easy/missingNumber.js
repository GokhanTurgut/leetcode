/*
  First solution that I have implemented
  using hash map to store all numbers and
  finding which one does not have a previous
  number and returning that previous that does
  not exist. Time and space complexity of this
  solution are O(n) which is acceptable but
  with a more clever approach we can have O(1)
  space complexity which is the second solution.
*/
// function missingNumber(nums) {
//   const numsHash = {};
//   for (let num of nums) {
//     numsHash[num] = true;
//   }
//   for (let num in numsHash) {
//     if (num !== "0") {
//       if (numsHash[num - 1] !== true) {
//         return num - 1;
//       }
//     }
//   }
//   return nums.length;
// }

/*
  With this solution we are using a
  mathematical formula to calculate
  the sum of n numbers then we are
  summing all the numbers in nums array
  when we get the difference we found the
  missing piece.
*/
function missingNumber(nums) {
  const n = nums.length;
  const sumToN = (n * (n + 1)) / 2;
  const sum = nums.reduce((sum, num) => sum + num);
  return sumToN - sum;
}
