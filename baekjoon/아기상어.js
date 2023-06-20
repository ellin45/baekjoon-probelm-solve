const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split(" ");

const N = input[0];
const M = input[1];

console.log(N,M);