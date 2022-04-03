/*
  We use depth first search and create a
  new tree according to the conditions given
  in the problem. O(n) time and O(n) space 
  complexity.
*/
function mergeTrees(root1, root2) {
  function dfsMerge(node1, node2) {
    if (!node1 && !node2) return null;
    const node = new TreeNode();
    if (!node1 && node2) {
      node.val = node2.val;
      node.left = dfsMerge(null, node2.left);
      node.right = dfsMerge(null, node2.right);
      return node;
    }
    if (node1 && !node2) {
      node.val = node1.val;
      node.left = dfsMerge(node1.left, null);
      node.right = dfsMerge(node1.right, null);
      return node;
    }
    node.val = node1.val + node2.val;
    node.left = dfsMerge(node1.left, node2.left);
    node.right = dfsMerge(node1.right, node2.right);
    return node;
  }
  return dfsMerge(root1, root2);
}
