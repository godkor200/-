const characterFrequency = function (string) {
  let strings = string.split("");
  let count = strings.reduce((chars, cur) => {
    if (chars[cur]) {
      chars[cur]++;
    } else {
      chars[cur] = 1;
    }
    return chars;
  }, {});
  let result = Object.keys(count).map((key) => [key, count[key]]);
  let finalResult = result.sort((a, b) => b[1] - a[1]);
  return finalResult;
};
characterFrequency("supercalifragilisticexpialidocious");
