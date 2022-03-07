/*
  Implemented a Trie data structure
  to quickly search for the words, the
  hard part of the problem is the wildcard
  character "." and to overcome that hard
  part we have created depth first search to
  search words recursively for dot characters.
*/
class Node {
  constructor() {
    this.chars = {};
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.chars[char]) {
        node.chars[char] = new Node();
      }
      node = node.chars[char];
    }
    node.word = true;
  }

  search(word) {
    return this.dfs(0, this.root, word);
  }

  dfs(index, node, word) {
    let currNode = node;
    for (let i = index; i < word.length; i++) {
      let char = word[i];
      if (char === ".") {
        for (let node in currNode.chars) {
          if (this.dfs(i + 1, currNode.chars[node], word)) {
            return true;
          }
        }
        return false;
      } else {
        if (!currNode.chars[char]) return false;
        currNode = currNode.chars[char];
      }
    }
    return currNode.word ? true : false;
  }
}
