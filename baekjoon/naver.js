const solution = (arr) => {
  let result = [];
  
  let map = new Map();
    let cnt = 0;
    arr.forEach((v,i) =>{
        // map = v.map(map.set(map.get(arr),+1));
        map.set(v, (map.get(v) || 0) + 1)
        console.log(map)
    })
    map.set(v, (map.get(v) || 0) + 1)
    // foreach를 돌때 매번 콜백함수가 실행된다.
    // 0번째는 arr의 원소, 1번째는 index다. 물론 arr[i] 가 arr의 원소가 되는건 맞지만 value 즉 element로 접근하는게 옳지않을까
  result.push(map)
  
  return result;
}

solution([1, 2, 3, 3, 3, 3, 4, 4]);

solution([3, 2, 4, 4, 2, 5, 2, 5, 5]);
