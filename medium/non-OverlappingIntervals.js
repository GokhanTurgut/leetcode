/*
  First to be able to analyze the intervals
  easily we need to sort the intervals, we sort
  the intervals by starting value if they are equal
  then we look for the end values and sort based on
  that. That gives us O(nlogn) time complexity because
  of sorting then we go through the intervals one time 
  and see how many times we need to remove intervals by
  comparing previous end value to the start of the current
  one then incrementing the counter variable accordingly 
  and at the end we return that counter variable.
*/

function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] === b[0]) {
      if (a[1] < b[1]) return -1;
    }
  });
  let counter = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      counter++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    }
  }
  return counter;
}
