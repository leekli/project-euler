function largestProduct(grid) {
  let greatestProductTotal = 0;
  let currentSum = 0;
  const gridSize = grid.length;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Check all columns going across right
      if (j + 3 < grid[i].length) {
        currentSum =
          grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];

        if (currentSum >= greatestProductTotal)
          greatestProductTotal = currentSum;
      }

      // Check all rows going down
      if (i + 3 < gridSize) {
        currentSum =
          grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];

        if (currentSum >= greatestProductTotal)
          greatestProductTotal = currentSum;
      }

      // Check diagonal down and right
      if (i + 3 < gridSize && j + 3 < grid[i].length) {
        currentSum =
          grid[i][j] *
          grid[i + 1][j + 1] *
          grid[i + 2][j + 2] *
          grid[i + 3][j + 3];

        if (currentSum >= greatestProductTotal)
          greatestProductTotal = currentSum;
      }

      // Check diagonal down and left
      if (i + 3 < gridSize && j - 3 >= 0) {
        currentSum =
          grid[i][j] *
          grid[i + 1][j - 1] *
          grid[i + 2][j - 2] *
          grid[i + 3][j - 3];

        if (currentSum >= greatestProductTotal)
          greatestProductTotal = currentSum;
      }
    }
  }

  return greatestProductTotal;
}

module.exports = largestProduct;
