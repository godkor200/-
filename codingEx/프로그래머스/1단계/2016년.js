function solution(a, b) {
  let oneWeek = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
  let week = new Date(2016, a - 1, b).getDay();
  return oneWeek[week];
}
let a = solution(2, 29);
console.log("🚀 ~ file: 2016년.js ~ line 6 ~ a", a);
