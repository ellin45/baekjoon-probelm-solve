const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("baekjoon-probelm-solve/baekjoon/test.txt").toString().trim().split("\n");

const N = input[0];
const M = input[1];
const S = input[2].toString();

function solution(N,M,S){
    let answer = '';
    let cnt = 0
    M = 2*N+1
    //N개의 I과 M개의 O 오로 이루어진 문자열 만들기
    let str = 'IOI'
    for(let i=0; i<N; i++){
        answer.push(N[i]);
        console.log(N[i]);
    }
    
    //배열안에 포함되어있는지 확인
    // while(true){
    // if(S.includes(str)=== true){
    //     cnt++;

    // }
    //몇개가 포함되어있는지 count
}
    

    
    
    


    return answer;
}
solution();
console.log(N,M,S);