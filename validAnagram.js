function isAnagram(s, t) {
  const letters = {};

  for (let letter of s) {
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }

  for (let letter of t) {
    if (letters[letter]) {
      letters[letter]--;
    } else {
      return false;
    }
  }

  for (let letter in letters) {
    if (letters[letter] !== 0) return false;
  }

  return true;
}