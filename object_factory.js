function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third; //디스는 그 디스가 속해있는 객체가 가리키고 있는 것
  };
}
console.log("Person -> Person", new Person());

let kim = new Person("kim", 10, 20, 30);
let lee = new Person("lee", 10, 10, 10);

console.log("kim sum", kim.sum());

console.log("lee sum", lee.sum());

let d1 = new Date();
console.log("d1.getFUllYear()", d1.getFullYear());
console.log("Date", Date);
