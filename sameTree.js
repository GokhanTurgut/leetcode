/*
  We serialize both trees to a
  string version then compare 
  them to each other and return
  the result. We traverse each 
  tree only once so simplified
  time complexity is O(n).
*/
function isSameTree(p, q) {
  function dfs(node, values) {
    if (!node) return (values += "null, ");
    values += node.val + ", ";
    values = dfs(node.left, values);
    values = dfs(node.right, values);
    return values;
  }
  return dfs(p, "") === dfs(q, "");
}
