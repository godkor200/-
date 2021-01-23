class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }

  size() {
    return this.top + 1;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top++;
  }

  pop() {
    delete this.storage[this.top - 1];
    this.top--;
  }
}
let stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
stack.pop();
stack.pop();
stack.pop();
stack.pop();
//stack.pop();

let size = stack.size();
console.log("🚀 ~ file: stack.js ~ line 18 ~ size", size);
console.log("🚀 ~ file: stack.js ~ line 14 ~ stack", stack);
