const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/ellin/code/baekjoon/baekjoon-probelm-solve/baekjoon/boostCampBlog_1/test.txt"
  )
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const size = {BOOL: "1", SHORT: "2", FLOAT: "4", INT: "8", LONG: "16"};
  let answer = [];

  //두개의 값 중  더 작은 값의 차이 만큼 .을 repeat해줍니다.
  //size의 개수만큼 #을 repeat한다.
  //#.repeat + 앞과 뒤의 차이 * '.' + #.repeat
  cnt = size.BOOL;
  answer.push("#".repeat(size.cnt));
  console.log(answer);
}
solution(input);
return;
