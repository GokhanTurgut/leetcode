/*
  Recursive solution with O(n) time complexity,
  we create a boundary for each node and check
  that the children of that node fulfills the
  boundary conditions and based on that we 
  return the result.
*/

function isValidBST(root) {
  if (!root) return true;
  function checker(node, min, max) {
    if (node.left !== null) {
      if (min < node.left.val && node.left.val < node.val) {
        if (!checker(node.left, min, node.val)) return false;
      } else return false;
    }
    if (node.right !== null) {
      if (node.val < node.right.val && node.right.val < max) {
        if (!checker(node.right, node.val, max)) return false;
      } else return false;
    }
    return true;
  }
  return checker(root, -Infinity, Infinity);
}
