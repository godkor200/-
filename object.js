let myMath = {
  PI: Math.PI,
  random: () => Math.random(),
  floor: (val) => Math.floor(val),
};

console.log("myMath.PI", myMath.PI);
console.log("myMath.random", myMath.random());
console.log("myMath.floor", myMath.floor(3.9));

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second; //디스는 그 디스가 속해있는 객체가 가리키고 있는 것
  },
};

console.log("sum", kim.sum());
