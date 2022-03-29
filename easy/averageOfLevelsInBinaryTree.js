/*
  We need to go through the binary
  tree level by level therefore breadth
  first search is the perfect traversal
  algorithm to use here. We calculate the
  average for each level then push that 
  result to our averages array. O(n) time
  and O(1) space complexity if we didn't count
  the returned averages array.
*/
function averageOfLevels(root) {
  const averages = [];
  const queue = [root];
  while (queue.length) {
    const qLength = queue.length;
    let sum = 0;
    for (let i = 0; i < qLength; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    averages.push(sum / qLength);
  }
  return averages;
}
