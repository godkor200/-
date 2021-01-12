class NewPerson {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "class :" + (this.first + this.second);
  }
}
class NewPersonPlus extends NewPerson {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return "superClass :" + (super.sum() + this.third);
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

// NewPerson.prototype.sum = function () {
//   return "prototypeSum :" + (this.first + this.second + this.third); //디스는 그 디스가 속해있는 객체가 가리키고 있는 것
// };

let yu = new NewPersonPlus("Byeongguk", 1, 2, 3);
let subin = new NewPerson("subin", 3, 4, 5);
console.log("subin", subin);
console.log("subinSum=>", subin.sum());
console.log("NewPerson -> yu", yu);
console.log("sum", yu.avg());

//<---------------------------------------------------------------------------->
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
