/*
  First solution is the naive or brute force
  one with O(n) time complexity and the second
  one uses the fact that the letters array is
  sorted therefore we can use binary search
  algorithm to reduce the time complexity to
  O(logn).
*/

// function nextGreatestLetter(letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] > target) {
//       return letters[i];
//     }
//   }
//   return letters[0];
// }

function nextGreatestLetter(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let char = letters[0];
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (letters[middle] > target) {
      char = letters[middle];
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return char;
}

console.log(nextGreatestLetter(["c", "f", "j"], "k"));
