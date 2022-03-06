/*
  For this solution we create a new intervals
  array to return at the end and start looping
  through the sorted intervals array to check if
  the new interval we are gonna insert overlaps
  with the current interval and according to that
  we create our new intervals array. O(n) time
  complexity and O(n) time complexity.
*/
function insert(intervals, newInterval) {
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      result.push(...intervals.slice(i));
      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
  }
  result.push(newInterval);
  return result;
}
