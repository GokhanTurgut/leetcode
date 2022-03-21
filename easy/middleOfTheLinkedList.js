/*
  First we go through the linked list to count
  the nodes then after that we calculate the middle
  point of the linked list. With the middle point
  information we go through the linked list once
  again and return the middle node. O(n) time and
  O(1) space complexity.
*/
function middleNode(head) {
  let counter = 0;
  let node = head;
  while (node) {
    counter++;
    node = node.next;
  }
  let middle;
  if (counter % 2 === 0) middle = counter / 2 + 1;
  else middle = Math.ceil(counter / 2);
  let secondCounter = 0;
  let secondNode = head;
  while (secondNode) {
    secondCounter++;
    if (secondCounter === middle) {
      return secondNode;
    }
    secondNode = secondNode.next;
  }
}
