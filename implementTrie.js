class Node {
  constructor() {
    this.chars = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
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
    let node = this.root;
    for (let char of word) {
      if (!node.chars[char]) return false;
      node = node.chars[char];
    }
    return node.word ? true : false;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.chars[char]) return false;
      node = node.chars[char];
    }
    return true;
  }
}
