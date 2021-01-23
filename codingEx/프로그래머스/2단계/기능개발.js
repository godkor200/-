function solution(progresses, speeds) {
  let result = [];
  let count = 1;

  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let prev = days[0];
  for (let i = 1; i < days.length; i++) {
    let curr = days[i];
    if (prev >= curr) {
      count++;
    } else {
      result.push(count);
      prev = curr;
      count = 1;
    }
  }
  result.push(count);
  return result;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));
console.log(solution([93, 30, 55, 60, 40, 65], [1, 30, 5, 10, 60, 7]));
console.log(solution([96, 99, 98, 97], [1, 1, 1, 1]));
console.log(solution([99, 1], [1, 99]));

/*예제 1)
progresses : [40, 93, 30, 55, 60, 65]
speeds : [60, 1, 30, 5 , 10, 7]
return : [1,2,3]

예제 2)
progresses : [93, 30, 55, 60, 40, 65]
speeds : [1, 30, 5 , 10, 60, 7]
return : [2,4]
*/
