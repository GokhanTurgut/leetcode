/*
  We give endNode a head start of n nodes
  so that when endNode hits the end of the 
  linked list we can detect that we are on 
  the nth node from end with our node variable
  then we can make the necessary change to remove
  nth item using node variable.
*/

function removeNthFromEnd(head, n) {
  let node = head;
  let endNode = head;
  if (node.next === null) {
    head = null;
    return head;
  }
  for (let i = 0; i < n; i++) {
    endNode = endNode.next;
  }
  while (endNode) {
    if (endNode.next === null) {
      node.next = node.next.next;
      break;
    } else {
      node = node.next;
      endNode = endNode.next;
    }
  }
  if (!endNode) {
    head = node.next;
  }
  return head;
}
