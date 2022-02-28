/*
  We traverse the tree and add node 
  values to our empty string. If the
  node does not exist we add null to
  the string to understand that we have
  finished the subtree. O(n) time complexity.
*/

function serialize(root) {
  let serialized = "";
  if (!root) return serialized;
  function traverse(node) {
    if (!node) {
      serialized += "null,";
      return;
    }
    serialized += node.val + ",";
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return serialized;
}

/*
  We follow our steps in serialization to
  reconstruct the tree in deserialize function.
  We traverse based on the string we received
  and use a global index variable to track our 
  position in the array we constructed from the
  string we received. O(n) time complexity again.
*/

function deserialize(data) {
  if (!data) return null;
  const datas = data.split(",");
  let index = 0;
  function traverse() {
    if (datas[index] === "null") {
      index++;
      return null;
    }
    const node = new TreeNode(Number(datas[index]));
    index++;
    node.left = traverse();
    node.right = traverse();
    return node;
  }
  return traverse(0);
}
