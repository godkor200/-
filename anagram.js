var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sortStr1 = s.split("").sort().join("");
  let sortStr2 = t.split("").sort().join("");
  return sortStr1 === sortStr2;
};

// console.log(
//   "🚀 ~ file: anagram.js ~ line 11 ~ isAnagram",
//   isAnagram("rat", "cat")
// );

// isAnagram("anagram", "nagaram");
console.log(
  "🚀 ~ file: anagram.js ~ line 19 ~ ",
  isAnagram("anagram", "nagaram")
);
