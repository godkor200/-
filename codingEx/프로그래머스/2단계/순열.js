function solution(arr) {
  let result = [];
  function getPermutation(arr, fixed) {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, 1);
        result.push(parseInt(newFixed));
        getPermutation(copyArr, newFixed);
      }
    }
    return arr[0];
  }
  getPermutation(arr, '');
  return result;
}
solution([1, 2, 3]);
console.log(
  '🚀 ~ file: 순열.js ~ line 18 ~ solution([1, 2, 3])',
  solution([1, 2, 3])
);
