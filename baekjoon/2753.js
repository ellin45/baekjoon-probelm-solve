const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split(" ");

let year = input[0];

if(year % 4 === 0 && year % 100 === 0){
    console.log('1')
}else{
    console.log('0')
}