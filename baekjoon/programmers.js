function solution(arr, divisor) {
    let answer =[]
    for(let i=0 i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
            console.log(arr[i])
        }
            if(arr[i].length === 0){
                return answer.push(-1)
            }
        
    }
    return answer;
}