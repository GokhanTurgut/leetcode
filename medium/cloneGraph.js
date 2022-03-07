/*
  Recursive solution that uses a
  hash table to store the values of
  nodes mapped to the newly created
  copy, question specifies that node
  values are unique so this approach
  works.
*/

function cloneGraph(node) {
  if (!node) return node;
  const visited = {};
  function clone(cloneNode) {
    if (visited[cloneNode.val]) {
      return visited[cloneNode.val];
    }
    const copyNode = new Node(cloneNode.val);
    visited[cloneNode.val] = copyNode;
    for (let neighbor of cloneNode.neighbors) {
      copyNode.neighbors.push(clone(neighbor));
    }
    return copyNode;
  }
  return clone(node);
}