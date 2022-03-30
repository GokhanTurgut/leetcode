/*
  We use depth first search to
  calculate the sum of the path
  and when the node doesn't have
  any child we compare the sum to
  the target sum and change our 
  result variable. O(n) time and 
  O(1) space complexity.
*/
function hasPathSum(root, targetSum) {
  if (!root) return false;
  let result = false;
  function bfs(node, sum) {
    if (!node) {
      return;
    }
    sum += node.val;
    if (!node.left && !node.right) {
      if (sum === targetSum) result = true;
    }
    bfs(node.left, sum);
    bfs(node.right, sum);
  }
  bfs(root, 0);
  return result;
}
