function solution(s) {
  //전부다 소문자만들고 배열을 만든다.
  let arr = s.toLowerCase().split("");
  //count
  let ans = "";
  let count = 1;
  //for loop
  for (let i = 0; i < arr.length; i++) {
    //if ' ' count = 0 ;  ' '
    if (arr[i] === " ") {
      count = 0;
      ans += " ";
    } else if (count % 2 !== 0) {
      ans += arr[i].toUpperCase();
      //if count % 2 !== 0 --> 대문
    } else {
      ans += arr[i];
      //if
    }
    count++;
  }
  return ans;
}
solution("try hello world");

//TrY HeLlo WoRlD
//135짝수 => 대문자
//246홀수 => 소문자
