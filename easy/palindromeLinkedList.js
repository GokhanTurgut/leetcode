/*
  First we convert linked list to
  an array then we go through the
  array comparing values from beginning
  and end until the middle point of the
  i reaches the middle point of the array.
  O(n) time and O(n) space complexity.
*/
function isPalindrome(head) {
  const nums = [];
  let node = head;
  while (node) {
    nums.push(node.val);
    node = node.next;
  }
  let right = nums.length - 1;
  for (let i = 0; i < nums.length / 2; i++) {
    if (nums[i] !== nums[right]) return false;
    right--;
  }
  return true;
}
