// 1
function mazeRunner(maze, directions) {
  var path = Array(),
    curX,
    curY;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        curX = j;
        curY = i;
      }
    }
  }
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] == "N") curY--;
    if (directions[i] == "S") curY++;
    if (directions[i] == "W") curX--;
    if (directions[i] == "E") curX++;

    // path.push(maze[curY][curX]);
    if (!maze[curY]) return "Dead";
    if (maze[curY][curX] == 3) return "Finish";
    if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return "Dead";
  }
  return "Lost";
}

// 2
function mazeRunner(maze, dirs) {
  var y = maze.findIndex((arr) => arr.includes(2));
  var x = maze[y].indexOf(2);
  var curPos;
  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === "N") y--;
    if (dirs[i] === "S") y++;
    if (dirs[i] === "W") x--;
    if (dirs[i] === "E") x++;
    if (!maze[y]) return "Dead";
    curPos = maze[y][x];
    if (curPos === 3) return "Finish";
    if (curPos === 1 || curPos === undefined) return "Dead";
  }
  return "Lost";
}

// 3
function mazeRunner(maze, directions) {
  var size = maze.length,
    i = -1,
    j = -1,
    di = { N: -1, S: 1, E: 0, W: 0 },
    dj = { W: -1, E: 1, N: 0, S: 0 };
  while (!maze[++i].includes(2));
  while (maze[i][++j] != 2);
  for (var s of directions) {
    (i += di[s]), (j += dj[s]);
    if (i < 0 || j < 0 || i >= size || j >= size || maze[i][j] == 1)
      return "Dead";
    if (maze[i][j] == 3) return "Finish";
  }
  return "Lost";
}
