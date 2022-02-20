// Time complexity O(n^2) and space complexity O(1)

function countSubstrings(s) {
  let counter = 0;
  function checker(left, right) {
    while (left > -1 && right < s.length && s[left] === s[right]) {
      counter++;
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    checker(i, i);
    checker(i, i + 1);
  }
  return counter;
}

console.log(countSubstrings("aaa"));
