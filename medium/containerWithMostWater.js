/*
  Solution using two pointers with O(n) time complexity and
  O(1) space complexity;
*/

function maxArea(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    const area = Math.min(height[start], height[end]) * (end - start);
    if (area > maxArea) maxArea = area;
    if (height[start] > height[end]) end--;
    else start++;
  }
  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
