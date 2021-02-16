function solution(numbers) {
  let result = [];
  let num = numbers.split('');
  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, 1);
        result.push(parseInt(newFixed));
        getPermutation(copyArr, newFixed);
      }
    }
    return arr[0]
  };
  getPermutation(num, '');
  return result
    .[...new Set(result)]
    .filter((e) => isPrimeNum(e)).length;
}
let r = solution('011');
console.log('🚀 ~ file: 소수찾기.js ~ line 26 ~ r', r);
function solution(arr) {
  let result = [];
  function getPermutation(arr,fixed){
   if (arr.length >= 1) {
        for (let i = 0; i < arr.length; i++) {
          const newFixed = fixed + arr[i];
          const copyArr = arr
          copyArr.splice(i, 1);
          result.push(parseInt(newFixed));
          getPermutation(copyArr, newFixed);
        }
      }
      return arr[0]
  } 
  return getPermutation(arr,"")
  }