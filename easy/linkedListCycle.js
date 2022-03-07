/* 
  Going through the linked list after passing a node
  we set the next property of that node to 'cycle' than
  we check for it to determine cycles in the list.
  This solution has O(n) time complexity and O(1) space
  complexity.
*/
function hasCycle(head) {
  let node = head;
  while (node) {
    if (node.next === "cycle") return true;
    let temp = node.next;
    node.next = "cycle";
    node = temp;
  }
  return false;
}
