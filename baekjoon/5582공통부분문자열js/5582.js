const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs
  .readFileSync("baekjoon-probelm-solve/baekjoon/5582공통부분문자열js/test.txt")
  .toString()
  .trim()
  .split(" ");

let s = input[0];

//"ABRA"
console.log(s);
