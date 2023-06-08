const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split("\n");



const N = input[0];
const room = input.slice(1).map((str) => [...str]);
let count = input.shift()

function solution(count,input){
    let row = 0, column = 0;

    for(let i=0; i<count; i++){
        row += input[i].split('X').filter(v => v.includes('..')).length
    
    let columnCount = 0;
    for(let j=0; j<count; j++) {
        if(input[j][i] === '.') columnCount++;
        if(input[j][i] === 'X' || j === count-1) {
            if(columnCount >= 2) column++;
            columnCount = 0;
        }
    }
}

return `${row} ${column}`

}

console.log(solution(count,input))