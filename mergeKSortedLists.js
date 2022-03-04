/*
  We start by getting all the nodes from
  the lists into an one array then we 
  sort that array based on the values of
  each node. After that we go through the
  sorted array to link them together based
  on their position on the sorted array.
  At the end we return the starting node
  from the array. Time complexity is O(logn)
  where n is the total number of nodes in all
  lists because of the sorting operation.
*/
function mergeLists(lists) {
  if (!lists || !lists.length) return null;
  listsArr = [];
  for (let i = 0; i < lists.length; i++) {
    let temp = lists[i];
    while (temp) {
      listsArr.push(temp);
      temp = temp.next;
    }
  }
  listsArr.sort((a, b) => {
    return a.val - b.val;
  });
  for (let i = 0; i < listsArr.length - 1; i++) {
    listsArr[i].next = listsArr[i + 1];
  }
  if (!listsArr.length) return null;
  listsArr[listsArr.length - 1].next = null;
  return listsArr[0];
}
