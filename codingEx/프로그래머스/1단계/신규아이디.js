function solution(new_id) {
  let temp = [];
  //1단기 2단계
  new_id
    .toLowerCase()
    .split("")
    .forEach((e) => temp.push(SpecialCharacters(e)));
  return temp;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "." && temp[i + 1] === "." && temp[i + 2] === ".") {
      temp[i] = ".";
      temp[i + 1] = "";
      temp[i + 2] = "";
    } else if (temp[i] === "." && temp[i + 1] === ".") {
      temp[i] = ".";
      temp[i + 1] = "";
    } else if (temp[0] === "." || temp[temp.length - 1] === ".") {
      temp[0] = "";
      temp[temp.length - 1] = "";
    }
  }
  let result = temp.filter((e) => e !== "").join("");
  console.log("result", result);
}

function SpecialCharacters(new_id) {
  let arr = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    ":",
    "?",
    ",",
    "<",
    ">",
    "/",
  ];
  for (let i = 0; i < arr.length; i++) {
    if (new_id === arr[i]) {
      return "";
    } else if (new_id !== arr[i]) {
      return new_id;
    } else {
      continue;
    }
  }
}
let r = solution("...!@BaT#*..y.abcdefghijklm");
console.log("결과", r);
