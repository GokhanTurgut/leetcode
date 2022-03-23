/*
  Fairly simple algorithm where we
  go through the linked list and use
  two variables to look for same values
  when we find one we change the previous
  nodes next pointer to the current nodes
  next pointer and effectively remove that
  current node. O(n) time and O(1) space
  complexity.
*/
function deleteDuplicates(head) {
  if (!head) return null;
  if (!head.next) return head;
  let previous = head;
  let current = head.next;
  while (current) {
    if (current.val === previous.val) {
      previous.next = current.next;
      current = current.next;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return head;
}
