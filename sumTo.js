function sumTo(num) {
  if (num === 0) {
    return num;
  }
  return num + sumTo(num - 1);
}

sumTo(4);
console.log("🚀 ~ file: sumTo.js ~ line 11 ~ sumTo(4);", sumTo(4));
