/*
  Binary search implementation to achieve
  O(logn) time complexity.
*/
function peakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] > arr[mid + 1]) end = mid;
    if (arr[mid] > arr[mid - 1]) start = mid;
  }
}

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));
