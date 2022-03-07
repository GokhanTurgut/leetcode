// Two pointer solution because array is sorted
// It has the same time complexity(O(n)) with hash table solution but
// this one has better space complexity(O(1)).
function twoSum(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }
    else if (sum < target) start++;
    else end--;
  }
}
