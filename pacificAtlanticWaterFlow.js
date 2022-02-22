/*
  I have used depth first search to find which
  locations can flow to atlantic ocean and which 
  locations can flow to pacific ocean then I have
  kept the results of each search in its own set.
  After that I have gone through each location in the 
  matrix and see if that location is in both sets 
  if that is the case then we push that location 
  to our result array.
*/

function pasificAtlantic(heights) {
  const row = heights.length - 1;
  const col = heights[0].length - 1;
  const pacific = new Set();
  const atlantic = new Set();
  const result = [];
  function DFS(i, j, ocean) {
    const stack = [[i, j]];

    while (stack.length) {
      const [currI, currJ] = stack.pop();
      ocean.add(currI + "," + currJ);
      if (
        currI > 0 &&
        heights[currI][currJ] <= heights[currI - 1][currJ] &&
        !ocean.has(currI - 1 + "," + currJ)
      ) {
        stack.push([currI - 1, currJ]);
      }
      if (
        currI < row &&
        heights[currI][currJ] <= heights[currI + 1][currJ] &&
        !ocean.has(currI + 1 + "," + currJ)
      ) {
        stack.push([currI + 1, currJ]);
      }
      if (
        currJ > 0 &&
        heights[currI][currJ] <= heights[currI][currJ - 1] &&
        !ocean.has(currI + "," + (currJ - 1))
      ) {
        stack.push([currI, currJ - 1]);
      }
      if (
        currJ < col &&
        heights[currI][currJ] <= heights[currI][currJ + 1] &&
        !ocean.has(currI + "," + (currJ + 1))
      ) {
        stack.push([currI, currJ + 1]);
      }
    }
  }
  for (let i = 0; i <= row; i++) {
    DFS(i, 0, pacific);
    DFS(i, col, atlantic);
  }

  for (let j = 0; j <= col; j++) {
    DFS(0, j, pacific);
    DFS(row, j, atlantic);
  }

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      if (pacific.has(i + "," + j) && atlantic.has(i + "," + j)) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

console.log(
  pasificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
