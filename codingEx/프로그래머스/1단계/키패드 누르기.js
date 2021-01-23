function solution(numbers, hand) {
  let result = "";
  let keyPad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };

  let LocationL = [4, 1];
  let LocationR = [4, 3];
  for (let i = 0; i < numbers.length; i++) {
    let numberLocation = keyPad[numbers[i]];
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += "L";
      LocationL = keyPad[numbers[i]];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += "R";
      LocationR = keyPad[numbers[i]];
    } else if (
      numbers[i] === 2 ||
      numbers[i] === 5 ||
      numbers[i] === 8 ||
      numbers[i] === 0
    ) {
      let distanceL = getDis(LocationL, numberLocation);
      let distanceR = getDis(LocationR, numberLocation);
      if (distanceL === distanceR) {
        if (hand === "right") {
          result += "R";
          LocationR = keyPad[numbers[i]];
        } else {
          result += "L";
          LocationL = keyPad[numbers[i]];
        }
      } else if (distanceL > distanceR) {
        result += "R";
        LocationR = keyPad[numbers[i]];
      } else {
        result += "L";
        LocationL = keyPad[numbers[i]];
      }
    }
  }
  return result;
}
function getDis(Location, numberLocation) {
  return (
    Math.abs(Location[0] - numberLocation[0]) +
    Math.abs(Location[1] - numberLocation[1])
  );
}
let e = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
console.log("🚀 ~ file: 키패드 누르기.js ~ line 17 ~ e", e);
