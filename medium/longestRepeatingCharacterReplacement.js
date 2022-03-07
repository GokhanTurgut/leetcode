/*
  My first solution with a backtracking mechanism 
  that satisfies the requirements but it has an average time
  of 1300 ms execution time which is not ideal.
*/

// function characterReplacement(s, k) {
//   let start = 0;
//   let current = 0;
//   let lastCharIndex;
//   let counter = 0;
//   let max = 0;
//   let replaceLimit = k;

//   while (start < s.length && current < s.length) {
//     if (s[start] === s[current]) {
//       counter++;
//       current++;
//     } else {
//       if (replaceLimit > 0) {
//         replaceLimit--;
//         counter++;
//         if (!lastCharIndex) lastCharIndex = current;
//         current++;
//       } else {
//         if (counter > max) max = counter;
//         counter = 0;
//         if (lastCharIndex) {
//           start = lastCharIndex;
//           current = lastCharIndex;
//           lastCharIndex = null;
//         } else {
//           start = current;
//         }
//         replaceLimit = k;
//       }
//     }
//   }
//   if (start <= replaceLimit) {
//     counter += start;
//   }
//   return Math.max(max, counter);
// }

/*
  More optimized version with sliding window and hash table
  which has O(n) time complexity and O(1) space complexity.
*/
function characterReplacement(s, k) {
  const chars = {};
  let maxChar = 0;
  let start = 0;
  let maxWindow = 0;

  for (let i = 0; i < s.length; i++) {
    chars[s[i]] ? chars[s[i]]++ : (chars[s[i]] = 1);
    maxChar = Math.max(maxChar, chars[s[i]]);
    // (i + 1 - start) gives us the current length of the window
    // and we are checking to see if we have enough replacement limit
    // to be able to continue to grow our window
    if (i + 1 - start - maxChar <= k) {
      maxWindow = Math.max(maxWindow, i + 1 - start);
    } else {
      chars[s[start]]--;
      start++;
    }
  }
  return maxWindow;
}

console.log(characterReplacement("BAAAB", 2));
