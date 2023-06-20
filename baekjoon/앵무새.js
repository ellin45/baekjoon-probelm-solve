const fs = require("fs");
let input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split("\n");

const numbers = Number(input[0]); 
let sentences = input.slice(1); 

let answer = 0;

for (let i = 1; i < numbers.length; i++) {
  let left = -1;
  let right = -1;
  let min = 0;
  let result = 0;

  for (let j = i; j >= 0; j--) {
    left = Math.max(left, numbers[j]);
  }

  for (let j = i; j < numbers.length; j++) {
    right = Math.max(right, numbers[j]);
  }

  min = Math.min(left, right);
  result += min - numbers[i];
  answer += result;
}

console.log(answer);
