function solution(bridge_length, weight, truck_weights) {
  let timeCount = 0;
  let bridge = [];
  let flag = true;
  let currWeight = 0;
  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (flag) {
    let shiftVal = bridge.shift();
    currWeight -= shiftVal;
    if (currWeight + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      currWeight += truck_weights[0];
      bridge.push(truck_weights[0]);
      truck_weights.shift();
    }
    timeCount++;
    if (truck_weights.length === 0) {
      for (let i = 0; i < bridge_length; i++) {
        timeCount++;
      }
      flag = false;
    }
  }
  return timeCount;
}

// function solution(bridge_length, weight, truck_weights) {
//   var answer = 0;
//   var bridge = [];
//   let sum = 0;
//   let flag = true;
//   for (let i = 0; i < bridge_length; i++) {
//     bridge.push(0);
//   }
//   console.log('🚀 ~ file: track.js ~ line 36 ~ solution ~ bridge', bridge);

//   while (flag) {
//     let shiftVal = bridge.shift();
//     sum -= shiftVal;
//     if (sum + truck_weights[0] > weight) {
//       bridge.push(0);
//     } else {
//       sum += truck_weights[0];
//       bridge.push(truck_weights[0]);
//       truck_weights.shift();
//     }
//     answer++;
//     if (truck_weights.length === 0) {
//       for (let i = 0; i < bridge_length; i++) {
//         answer++;
//       }
//       flag = false; //합계가 완료되면 flag를 false시켜서, while을 빠져나옵니다.
//     }
//   }
//   return answer;
// }
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
