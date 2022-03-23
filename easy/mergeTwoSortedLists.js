/*
  We create the head node of our new
  merged list then we go through each 
  node in both lists comparing them and
  linking them to our new merged list node.
  At the and we return the head of our new
  merged list node. O(n) time and O(n) space
  complexity where n is the sum of nodes from
  list1 and list2. If we don't count the newly
  created merged list then we will have O(1) 
  space complexity.
*/
function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let listOneNode = list1;
  let listTwoNode = list2;
  let mergedListNode = new ListNode();
  let mergedListHead = mergedListNode;
  if (listOneNode.val <= listTwoNode.val) {
    mergedListNode.val = listOneNode.val;
    listOneNode = listOneNode.next;
  } else {
    mergedListNode.val = listTwoNode.val;
    listTwoNode = listTwoNode.next;
  }
  while (listOneNode && listTwoNode) {
    if (listOneNode.val <= listTwoNode.val) {
      mergedListNode.next = new ListNode(listOneNode.val);
      mergedListNode = mergedListNode.next;
      listOneNode = listOneNode.next;
    } else {
      mergedListNode.next = new ListNode(listTwoNode.val);
      mergedListNode = mergedListNode.next;
      listTwoNode = listTwoNode.next;
    }
  }
  if (!listOneNode) {
    mergedListNode.next = listTwoNode;
  }
  if (!listTwoNode) {
    mergedListNode.next = listOneNode;
  }
  return mergedListHead;
}
