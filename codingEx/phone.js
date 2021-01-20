function solution(phone_number) {
  let result = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    result += "*";
  }
  return result + phone_number.slice(phone_number.length - 4);
}
let a = solution("01033334444");
console.log("🚀 ~ file: phone.js ~ line 8 ~ a", a);
