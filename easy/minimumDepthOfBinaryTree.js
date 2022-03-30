/*
  We use depth first search to
  reach the leaf nodes and compare
  their depth to the current lowest
  depth and return the lowest one.
  O(n) time and O(1) space complexity.
*/
function minDepth(root) {
  if (!root) return 0;
  let minimum = Infinity;
  function bfs(node, depth) {
    if (!node) return depth;
    depth++;
    if (!node.left && !node.right) {
      minimum = Math.min(minimum, depth);
    } else {
      bfs(node.left, depth);
      bfs(node.right, depth);
    }
  }
  bfs(root, 0);
  return minimum;
}
