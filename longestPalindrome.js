let longestPalindrome = function (str) {
  if (str === "") {
    return 0;
  }
  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j <= str.length - 1; j++) {
      if (str.substr(i, j) === str.substr(j, i).split("").reverse().join("")) {
        console.log("longestPalindrome -> i", i);
        return i;
      }
    }
  }
};
longestPalindrome("racecar");
