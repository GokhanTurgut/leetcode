/*
  Basic solution that works with a
  reasonable result on leetcode but
  because we are searching many times
  with overlapping ranges we can use
  caching to store the calculations we
  have made previously.
*/
// class NumArray {
//   constructor(nums) {
//     this.nums = nums;
//   }

//   sumRange(left, right) {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//       sum += this.nums[i];
//     }
//     return sum;
//   }
// }

/*
  With this solution we use another array
  to store the sums up to that point in our
  nums array, that would mean we are making 
  unnecessary calculations if we are calling
  sumArray only once but the problem makes 
  many sumRange calls on the same array from
  with many sumRange calls this algorithm with
  caching would be much faster.
*/
class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.sums = sumArrayGenerator(nums);
  }

  sumRange(left, right) {
    if (left === 0) return this.sums[right];
    return this.sums[right] - this.sums[left - 1];
  }
}

function sumArrayGenerator(nums) {
  const sum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  return sum;
}

const example = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(example.sumRange(3, 5));
