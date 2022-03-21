/*
  We start traversing the linked list
  with our two helper variables and if
  the current nodes value is equal to the
  val parameter then we remove that node 
  from the list. O(n) time and O(1) space
  complexity.
*/
function removeElements(head, val) {
  if (!head) return null;
  let current = head;
  let previous = null;
  while (current) {
    if (current.val === val) {
      if (previous) {
        previous.next = current.next;
      } else head = current.next;
      current = current.next;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return head;
}
