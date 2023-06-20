const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs
  .readFileSync("baekjoon-probelm-solve/baekjoon/baekjoon-probelm-solve/baekjoon/1783병든나이트/병든나이트.js/test.txt")
  .toString()
  .trim()
  .split(" ");

  const N = input[0]

  console.log(N);