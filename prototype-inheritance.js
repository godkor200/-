let superObj = { superVal: "super" };
let subObj = { subVal: "sub" };
subObj.__proto__ = superObj;
console.log(subObj.superVal);
