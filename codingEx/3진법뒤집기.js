function solution(n) {
  let ans = 0;
  let reverse = n.toString(3).split("").reverse().join("");
  for (let i = 0; i < reverse.length; i++) {
    ans = ans * 3 + Number(reverse[i]);
  }
  return ans;
}
let c = solution(125);
console.log("🚀 ~ file: 3진법뒤집기.js ~ line 5 ~ solution(45)", c);

//https://ldgeao99.tistory.com/371
/*
문법
toString(n)
자연수를 진법수로 바꿔버림
parseInt( string, n )
string을 n진법일 때의 값으로 바꿉니다. n은 옵션으로 2부터 36까지 입력할 수 있습니다. 입력하지 않으면 10으로 처리합니다.
string의 처리는 parseFloat()와 거의 같습니다.
소수 부분은 버립니다.
0x로 시작하면 16진법으로 처리합니다.
*/
