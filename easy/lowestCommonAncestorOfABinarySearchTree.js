/*
  We use the structure of binary search
  tree to find the lowest common ancestor,
  mainly the right side of a node is always
  greater and the left side of a node is always
  smaller that means if the p and q are in different
  sides then we found our lowest common
  ancestor. O(logn) time complexity.
*/
function lowestCommonAncestor(root, p, q) {
  let node = root;
  while (node) {
    if (p.val < node.val && q.val < node.val) {
      node = node.left;
    } else if (p.val > node.val && q.val > node.val) {
      node = node.right;
    } else return node;
  }
}
