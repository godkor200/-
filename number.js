function solution(numbers) {
  //3333,3030,3434,5555,9999
  //9999,5555,3434,3333,3030
  let = numbers
    .sort((a, b) => {
      return String(b).repeat(4).slice(0, 4) - String(a).repeat(4).slice(0, 4);
    })
    .map((a) => a + "")
    .join("");
  return result;
}
//solution([3, 30, 34, 5, 9]);
solution([0, 10, 2]);
