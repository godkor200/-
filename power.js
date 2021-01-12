function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent % 2 === 0) {
    let divExp = power(base, exponent / 2) % 1000000009;
    return (divExp * divExp) % 1000000009;
  } else {
    let divExp = power(base, (exponent - 1) / 2) % 1000000009;
    return (divExp * divExp * base) % 1000000009;
  }
}
let output = power(3, 40);
console.log(output); // --> 637940656
let output2 = power(3, 11);
console.log(output2); // --> 177147
