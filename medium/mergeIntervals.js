// Since we have to sort the array we have a O(nlogn) time complexity
// and O(n) space complexity
function merge(intervals) {
  const result = [];
  let start, end;
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let pair of intervals) {
    if (end >= pair[0]) {
      if (start > pair[0]) {
        start = pair[0];
      }
      if (end < pair[1]) {
        end = pair[1];
      }
    } else {
      if (end !== undefined) result.push([start, end]);
      start = pair[0];
      end = pair[1];
    }
  }
  result.push([start, end]);
  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
