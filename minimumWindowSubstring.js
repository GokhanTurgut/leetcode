/*
  We have used sliding window to achieve 
  O(n) time complexity. We have used hash
  table to store each character and its 
  frequency of string t then in the while 
  loop we compare our current character and 
  adjust window accordingly.
*/

function minWindow(s, t) {
  if (t.length > s.length || !s.length) return "";
  const chars = {};
  for (let char of t) {
    chars[char] ? chars[char]++ : (chars[char] = 1);
  }
  let start = 0;
  let end = -1;
  let need = Object.keys(chars).length;
  let min = "";
  while (end < s.length + 1) {
    if (need === 0) {
      if (typeof chars[s[start]] === "number") {
        chars[[s[start]]]++;
      }
      if (chars[s[start]] > 0) need++;

      let temp = s.substring(start, end + 1);
      if (min === "") min = temp;
      else {
        min = min.length < temp.length ? min : temp;
      }
      start++;
    } else {
      end++;
      if (typeof chars[s[end]] === "number") {
        chars[s[end]]--;
      }
      if (chars[s[end]] === 0) need--;
    }
  }
  return min;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
