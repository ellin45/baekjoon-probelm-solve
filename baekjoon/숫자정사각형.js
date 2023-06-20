const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split("\n");

let [N, M] = input[0].split(" ");
let box = input.slice(1).map((num) => [...num]);

function solution(N,M){
    let answer=0;


    return answer;
}

//
console.log(N,M,box)