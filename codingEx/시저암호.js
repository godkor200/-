function solution(s, n) {
  let apSmall = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let apBig = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  console.log("길이", apSmall.length);
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      temp += " ";
    }
    for (let j = 0; j < apSmall.length; j++) {
      if (apSmall[j] === s[i] && apSmall[j + n]) {
        temp += apSmall[j + n];
      } else if (apSmall[j] === s[i] && !apSmall[j + n]) {
        temp += apSmall[n - (apSmall.length - j)];
      }
    }
    for (let z = 0; z < apBig.length; z++) {
      if (apBig[z] === s[i] && apBig[z + n]) {
        temp += apBig[z + n];
      } else if (apBig[z] === s[i] && !apBig[z + n]) {
        temp += apBig[n - (apBig.length - z)];
      }
    }
  }
  return temp;
}

let a = solution("a B z", 4);
console.log("🚀 ~ file: 시저암호.js ~ line 75 ~ a", a);
