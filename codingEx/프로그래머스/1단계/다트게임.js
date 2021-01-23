function solution(dartResult) {
  const bouns = { S: 1, D: 2, T: 3 };
  let temp = 0;
  let result = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      temp = Math.pow(temp, bouns[dartResult[i]]);
      if (dartResult[i + 1] === "*" || dartResult[i + 1] === "#") {
        continue;
      } else {
        result.push(temp);
        temp = 0;
      }
    } else if (dartResult[i] === "*") {
      temp = temp * 2;
      if (result[result.length - 1]) {
        result[result.length - 1] = result[result.length - 1] * 2;
      }
      result.push(temp);
      temp = 0;
    } else {
      temp = temp * -1;
      result.push(temp);
      temp = 0;
    }
  }
  console.log("🚀 ~ file: 다트게임.js ~ line 32 ~ solution ~ result", result);
  return result.reduce((a, c) => a + c);
}
solution("1D2S#10S");
