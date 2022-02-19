/*
  We use breadth first search to traverse neighboring horizontal and 
  vertical islands of given island then change them to "0" to not 
  go through them again. We count the separated islands in our main
  loop.O(m * n) time complexity where m is the number of rows and
  n is the number of columns.
*/

function numIslands(grid) {
  const colLength = grid[0].length;
  const rowLength = grid.length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let islands = 0;

  function breadthFirstSearch(row, col) {
    const queue = [];
    grid[row][col] = "0";
    queue.push([row, col]);
    while (queue.length > 0) {
      const [currRow, currCol] = queue.shift();

      for (let direction of directions) {
        let i = currRow + direction[0];
        let j = currCol + direction[1];
        if (i >= 0 && i < rowLength && j >= 0 && j < colLength) {
          if (grid[i][j] === "1") {
            queue.push([i, j]);
            grid[i][j] = "0";
          }
        }
      }
    }
  }
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === "1") {
        islands++;
        breadthFirstSearch(row, col);
      }
    }
  }
  return islands;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "0"],
  ])
);
