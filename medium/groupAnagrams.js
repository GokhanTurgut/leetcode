// We are sorting each word therefore O(mlogm) 
// where m is the average word length, and we do 
// this operation for each word in strs array so we
// have O(n*mlogm) time complexity for n words with m
// average word length
function groupAnagrams(strs) {
  const hashTable = {};
  for (let word of strs) {
    const key = [...word].sort(); 
    if (!hashTable[key]) {
      hashTable[key] = [];
    }
    hashTable[key].push(word);
  }
  const result = [];
  for (let key in hashTable) {
    result.push(hashTable[key]);
  }
  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
