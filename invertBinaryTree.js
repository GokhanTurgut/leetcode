/*
  Recursive solution to inverting a 
  binary tree, checking to see if the 
  node has left and right element if 
  they do then calling the recursive 
  function on them before swapping 
  left and right.
*/

function invertTree(root) {
  if (!root) return root;
  function invertHelper(node) {
    const left = node.left;
    const right = node.right;
    if (left) invertHelper(left);
    if (right) invertHelper(right);
    node.left = right;
    node.right = left;
  }
  invertHelper(root);
  return root;
}
