function solution(num) {
  let result = 0;
  result = getCount(num);
  return result === -1 ? -1 : result;
}
function getCount(num) {
  let count = 0;
  function getCount(num) {
    if (num === 1) {
      return count;
    } else if (count >= 500) {
      return -1;
    } else if (num % 2 === 0) {
      count++;
      return getCount(num / 2);
    } else {
      count++;
      return getCount(num * 3 + 1);
    }
  }
  return getCount(num);
}

console.log("🚀 ~ file: 콜라츠추측.js ~ line 35 ~  a ", solution(6));
