/*
  First we implement a trie data structure
  to efficiently check word prefixes. We add 
  the wanted words to our trie then go through
  all the characters in our board and call depth
  first search function to check if we can construct
  one of the wanted words from that board character.
  If that is the case then we add that word to our
  result set to have only unique answers. At the end
  we return the array version of our result set.
*/
class Node {
  constructor() {
    this.chars = {};
  }
}

class Trie {
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
}

function findWords(board, words) {
  const wordsTrie = new Trie();
  for (let word of words) {
    wordsTrie.addWord(word);
  }

  const MAX_ROW = board.length - 1;
  const MAX_COL = board[0].length - 1;

  const result = new Set();
  let visited = {};

  function dfs(row, col, word, node) {
    if (
      row < 0 ||
      row > MAX_ROW ||
      col < 0 ||
      col > MAX_COL ||
      !(board[row][col] in node.chars) ||
      visited[`${row},${col}`]
    )
      return;

    visited[`${row},${col}`] = true;
    node = node.chars[board[row][col]];
    word += board[row][col];
    if (node.word) result.add(word);

    dfs(row + 1, col, word, node);
    dfs(row, col + 1, word, node);
    dfs(row - 1, col, word, node);
    dfs(row, col - 1, word, node);

    delete visited[`${row},${col}`];
  }

  for (let i = 0; i <= MAX_ROW; i++) {
    for (let j = 0; j <= MAX_COL; j++) {
      dfs(i, j, "", wordsTrie.root);
    }
  }

  return [...result];
}

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
