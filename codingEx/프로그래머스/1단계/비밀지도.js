function solution(n, arr1, arr2) {
  let temp = [];
  let resultString = "";
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i].toString(2));
    temp.push(arr2[i].toString(2));
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length !== n) {
      for (let j = 0; j < temp[i].length; j++) {
        temp[i] = "0" + temp[i];
        if (temp[i].length === n) {
          break;
        }
      }
    }
  }
  console.log("🚀 ~ file: 비밀지도.js ~ line 12 ~ c ~ c", temp);

  for (let i = 0; i < temp.length; i += 2) {
    for (let j = 0; j < temp[i].length; j++) {
      if (temp[i][j] === temp[i + 1][j]) {
        if (temp[i][j] === "1") {
          resultString += "#";
        } else {
          resultString += " ";
        }
      } else {
        resultString += "#";
      }
    }
    result.push(resultString);
    resultString = "";
  }
  return result;
}
let c = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
console.log("🚀 ~ file: 비밀지도.js ~ line 17 ~ c", c);
