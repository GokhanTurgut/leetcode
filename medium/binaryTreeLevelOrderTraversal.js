/*
  We use breadth first search to
  traverse the tree level by level
  by looking at queue length we see
  the number of nodes in that level
  and add them to a sub array then 
  push that sub array at the end.
  O(n) time complexity.
*/
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const subArr = [];
    const qL = queue.length;
    for (let i = 0; i < qL; i++) {
      const node = queue.shift();
      if (!node) continue;
      subArr.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
    if (subArr.length) result.push(subArr);
  }
  return result;
}
