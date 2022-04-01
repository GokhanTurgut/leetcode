/*
  Building two separate char stacks
  and converting them to string and
  comparing them at the end. O(n) time
  and O(n) space complexity where n is 
  the sum of lengths of both strings.
*/
function backspaceCompare(s, t) {
  const sArr = [];
  const tArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") sArr.pop();
    else sArr.push(s[i]);
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") tArr.pop();
    else tArr.push(t[i]);
  }
  return sArr.join("") === tArr.join("");
}
