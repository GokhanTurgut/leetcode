/*
  We serialize both trees to strings
  using depth first search and then
  check that main tree string contains
  sub tree string and return the result
  of that check. We go through each tree
  only once so time complexity of this 
  solution is O(n).
*/
function isSubtree(root, subRoot) {
  function dfs(node, string) {
    if (!node) {
      string += "null, ";
      return string;
    }
    string += "*" + node.val + ", ";
    string = dfs(node.left, string);
    string = dfs(node.right, string);
    return string;
  }
  const rootStr = dfs(root, "");
  const subRootStr = dfs(subRoot, "");
  return rootStr.includes(subRootStr);
}
