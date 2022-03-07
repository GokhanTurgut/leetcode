/*
  With this solution I have used sliding window and
  hash table to store characters, this solution has 
  O(n) time complexity and O(n) space complexity.
*/

function lengthOfLongestSubstring(s) {
  const chars = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) {
      while (start <= i) {
        if (s[start] === s[i]) {
          start++;
          break;
        } else {
          chars[s[start]]--;
          start++;
        }
      }
    } else {
      chars[s[i]] = 1;
    }

    max = Math.max(max, i - start + 1);
  }
  return max;
}

console.log(lengthOfLongestSubstring("pwwkew"));
