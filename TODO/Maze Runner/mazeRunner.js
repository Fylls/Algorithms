// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

// You will be given a 2D array of the maze and an array of directions.
// Your task is to follow the directions given.
// If you reach the end point before all your moves have gone, you should return Finish.
// If you hit any walls or go outside the maze border, you should return Dead.
// If you find yourself still in the maze after using all the moves, you should return Lost.

// The Maze array will look like

/*

maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

*/

// with the following key

/*
    0 = Safe place to walk
    1 = Wall
    2 = Start Point
    3 = Finish Point
*/

// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

// this f() return the coordinates of the starting point
function findStartCoord(array) {
  let startCoord;

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array.length; x++) {
      if (array[y][x] === 2) {
        startCoord = [x, y];
        return startCoord;
      }
    }
  }
}

// this f() returns the coordinates of the starting point
function findEndCoord(array) {
  let endCoord;

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array.length; x++) {
      if (array[y][x] === 3) {
        endCoord = [x, y];
        return endCoord;
      }
    }
  }
}

// this f() returns the the element contained in a specific coordinate
function findValueAtCoord(array, coord) {
  const x = coord[0];
  const y = coord[1];

  return array[y][x];
}

// this f() reads one direction at a time and changes the coordinates according to the specified direction
function nextCoord(dir, currentCoord) {
  let newCoord = currentCoord;

  // 0 => x
  // 1 => y

  if (dir === "N") {
    newCoord[1] = newCoord[1] - 1;
  } else if (dir === "S") {
    newCoord[1] = newCoord[1] + 1;
  } else if (dir === "E") {
    newCoord[0] = newCoord[0] + 1;
  } else if (dir === "W") {
    newCoord[0] = newCoord[0] - 1;
  }
  return newCoord;
}

// this f() use all other functions to solve the maze!
function mazeRunner(array, directions) {
  ///

  const startCoord = findStartCoord(array);
  console.log(`start coordinate x = ${startCoord[0]}, y = ${startCoord[1]}`);

  const endCoord = findEndCoord(array);
  console.log(`end coordinates x = ${endCoord[0]}, y = ${endCoord[1]}`);

  let currentCoord = startCoord;
  console.log(
    `current coordinates x = ${currentCoord[0]}, y = ${currentCoord[1]}`
  );

  directions.forEach((dir) => {
    currentCoord = nextCoord(dir, currentCoord);

    console.log("------------------------");
    console.log(dir);
    console.log(
      `current coordinates x = ${currentCoord[0]}, y = ${currentCoord[1]}`
    );

    if (findValueAtCoord(array, currentCoord) === 3) {
      return "Finish";
    }
  });

  if (findValueAtCoord(array, currentCoord) === 0) {
    return "lost";
  } else if (findValueAtCoord(array, currentCoord) === 1) {
    return "Dead";
  } else {
    ("damn it, this maze thing is getting out of hands!");
  }
}

var maze = [
  // x =>
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]);
