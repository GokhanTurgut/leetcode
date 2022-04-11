/*
  We first create a map that stores our
  letters corresponding to the number in
  an array format then we create a helper
  function permutation to be called recursively.
  We brute force all possible combinations of
  letters then fill our result set with it.
*/
function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const numberMapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 1) {
    return numberMapping[digits[0]];
  }
  const result = new Set();
  function permutation(index, str) {
    if (index === digits.length) {
      result.add(str);
      return;
    }
    for (const char of numberMapping[digits[index]]) {
      permutation(index + 1, str + char);
    }
  }
  permutation(0, "");
  return [...result];
}
