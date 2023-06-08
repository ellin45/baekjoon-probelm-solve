const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = input[0];
const rest = input.slice(1);

let arr = Array.from({length : N},(_,idx) =>rest[idx].split(" ")); 

// if(rest[N][0] === ){
    
// }
console.log(arr);



