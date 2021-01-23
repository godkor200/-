function solution(n) {
  let numArr = [];
  for (let i = 0; i <= n; i++) {
    numArr.push(i);
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 2 * i; j <= n; j += i) {
      console.log("🚀 ~ file: 소수.js ~ line 8 ~ solution ~ j", j);
      numArr[j] = 0;
    }
  }
  return numArr.splice(2).filter((ele) => ele !== 0).length;
}
solution(120);
