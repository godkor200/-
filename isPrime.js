const primeTester = function (n) {
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // 이 if문은 n이 숫자가 아니거나, 1보다 작거나, 정수가 아닌 경우를 처리합니다.
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n === 1) {
    return false;
  }
  let lim = n / 2;
  let i = 3;
  while (lim >= i) {
    if (n % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
};
let test = primeTester(2971215073 * 2971215073);
console.log("test", test);
const primeSieve = function (start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (
      i === 2 ||
      i === 3 ||
      i === 5 ||
      i === 7 ||
      (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)
    ) {
      result.push(i);
    }
  }
  return result;
};
let test2 = primeSieve(1, 10);
console.log("test2", test2);
