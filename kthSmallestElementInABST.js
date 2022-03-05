/*
  We use the depth first search in 
  order traversal to create an array
  with ascending order then we return
  the kth smallest element wanted from
  our sorted array.
*/
function kthSmallest(root, k) {
  const result = [];
  function helper(node) {
    if (node.left) helper(node.left);
    result.push(node.val);
    if (node.right) helper(node.right);
  }
  helper(root);
  return result[k - 1];
}
