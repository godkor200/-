function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return "prototype :" + (this.first + this.second + this.third); //디스는 그 디스가 속해있는 객체가 가리키고 있는 것
};

let kim = new Person("kim", 10, 20, 30);
kim.sum = function () {
  return "this : " + (this.first + this.second + this.third);
};
let lee = new Person("lee", 10, 10, 10);

console.log("kim sum", kim.sum());
console.log("lee sum", lee.sum());
