/*
  We first check if we can create the 2d
  array wanted with the given parameters
  and return empty array accordingly. We
  create the sub arrays with the help of
  modulus operand and create our result
  2d array. O(n) time and O(n) space 
  complexity.
*/
function construct2DArray(original, m, n) {
  if (m * n !== original.length) return [];
  const result = [];
  let current = [];
  for (let i = 0; i < original.length; i++) {
    if ((i + 1) % n === 0) {
      current.push(original[i]);
      result.push(current);
      current = [];
    } else current.push(original[i]);
  }
  return result;
}
