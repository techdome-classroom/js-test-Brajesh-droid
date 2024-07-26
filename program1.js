function getTotalIsles(grid) {
  if (!grid || grid.length === 0) return 0;

  const dfs = (i, j) => {
      
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }
    
      grid[i][j] = 'W';
      
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
  };

  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {
             
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
}


console.log(getTotalIsles([
  ["L","L","L","L","W"],
  ["L","L","W","L","W"],
  ["L","L","W","W","W"],
  ["W","W","W","W","W"],
])); 

console.log(getTotalIsles([
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
]));  
/// run with  node program1.js