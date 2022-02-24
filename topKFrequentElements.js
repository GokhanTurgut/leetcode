/*
  The trick in this question is the bucket array
  when you create a bucket array with frequencies
  mapped to arrays of values then you can go through
  the bucket array from end and add the most frequent
  values to the result array until k values has been added.
  With this solution we have three separate loops but
  if we simplify the time complexity we have O(n) time 
  complexity.
*/

function topKFrequent(nums, k) {
  const freq = {};
  for (let num of nums) {
    freq[num] ? freq[num]++ : (freq[num] = 1);
  }
  const bucket = [];
  for (let num in freq) {
    bucket[freq[num]]
      ? bucket[freq[num]].push(num)
      : (bucket[freq[num]] = [num]);
  }
  const result = [];
  for (let i = bucket.length - 1; i > -1; i--) {
    if (bucket[i]) {
      let counter = 0;
      while (result.length < k && counter < bucket[i].length) {
        result.push(bucket[i][counter]);
        counter++;
      }
      if (result.length === k) return result;
    }
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
