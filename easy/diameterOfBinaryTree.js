/*
  We use depth first search to find the
  maximum depth for each side and calculate
  the diameter for the current node and we
  recursively go from leaf node to root node
  calculating diameter for each node and 
  updating our maximum diameter variable and
  at end we return that variable. O(n) time
  and O(1) space complexity.
*/
function diameterOfBinaryTree(root) {
  let maxDiameter = 0;
  function dfs(node) {
    if (!node) return -1;
    const left = dfs(node.left);
    const right = dfs(node.right);
    maxDiameter = Math.max(maxDiameter, 2 + left + right);
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return maxDiameter;
}
