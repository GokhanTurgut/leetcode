/*
  We declare a variable inside
  maxDepth to keep track of the
  maximum depth our depth first
  search function have gone to
  then we return that variable
  at the end. O(n) time complexity.
*/
function maxDepth(root) {
  if (!root) return 0;
  let maxDepth = 1;

  function dfs(node, depth) {
    if (!node) return;
    depth++;
    maxDepth = Math.max(maxDepth, depth);
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
  dfs(root, 0);
  return maxDepth;
}
