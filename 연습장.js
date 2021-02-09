let arr = [1, 2, 3, 4, 5];
let kign = arr.map((num, index) => {
  return (arr[index] = num * 2);
});
console.log(kign);

function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let bridgeWeight = 0;
  let flag = true;
  let time = 0;
  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (flag) {
    let passedTruck = bridge.shift();
    bridgeWeight -= passedTruck;
    if (bridgeWeight + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      bridge.push(truck_weights[0]);
      bridgeWeight += truck_weights[0];
      truck_weights.shift();
    }
    time++;
    if (truck_weights.length === 0) {
      for (let i = 0; i < bridge_length; i++) {
        time++;
      }
      flag = false;
    }
  }
  return time;
}
