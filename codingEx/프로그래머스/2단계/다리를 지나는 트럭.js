function solution(bridge_length, weight, truck_weights) {
  /*
 bridge_length 큐의 길이
 weight 큐의 저장공간
 truck_weights 자료 크기
 */
  let inBridgeCount = 0;
  let inBridge = [];
  for (let i = 0; i < truck_weights.length; i++) {
    if (weight >= truck_weights[i]) {
      inBridge.push(truck_weights[i]);
    }
  }
}
