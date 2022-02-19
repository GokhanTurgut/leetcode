// Iterative solution
function reverseList(head) {
  if (!head) return head;
  let node = head;
  let next = node.next;
  node.next = null;
  while (node !== null) {
    if (next === null) {
      head = node;
      return head;
    }
    let temp = next.next;
    next.next = node;
    node = next;
    next = temp;
  }
}

// Recursive solution
function reverseList(head) {
  if (!head || head.next === null) return head;
  let prevNode = head;
  let nextNode = prevNode.next;
  prevNode.next = null;
  function reverse(currentNode) {
    let temp = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    if (temp === null) {
      head = currentNode;
      return;
    } else {
      reverse(temp);
    }
  }
  reverse(nextNode);
  return head;
}
