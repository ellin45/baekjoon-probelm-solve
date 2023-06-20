const fs = require("fs");

// TODO: Adjust the file path ("/dev/stdin") for submission
const input = fs
  .readFileSync("baekjoon-probelm-solve/baekjoon/킹/test.txt")
  .toString()
  .trim()
  .split("\n");

  const location = input[0];

  const move = input.slice(1);
  
  console.log(location, move);
