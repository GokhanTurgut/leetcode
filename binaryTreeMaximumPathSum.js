/*
  We keep a global variable to track
  the maximum path sum and use depth
  first search to traverse the tree and
  calculate path sums and compare it to 
  our global maximum. Time complexity is
  O(n) since we traverse the tree only once.
*/
function maxPathSum(root) {
  let max = root.val;

  function dfs(node) {
    if (!node) return 0;
    let left = Math.max(dfs(node.left), 0);
    let right = Math.max(dfs(node.right), 0);
    max = Math.max(max, node.val + left + right);
    return node.val + Math.max(left, right);
  }

  dfs(root);
  return max;
}
