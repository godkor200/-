class Queue {
  constructor() {
    //객체를 실행되기전 먼저 실행시키는 함수
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.front > this.rear ? "0" : this.rear - this.front;
  }

  enqueue(element) {
    return (this.storage[this.rear++] = element);
  }

  dequeue() {
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  }
}
let queue = new Queue();
let a = queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
queue.enqueue("4");
let k = queue.dequeue();
let s = queue.size();
console.log("🚀 ~ file: queue.js ~ line 29 ~ dequeue", k);
console.log("🚀 ~ file: queue.js ~ line 18 ~ enqueue", a);
console.log("🚀 ~ file: queue.js ~ line 17 ~ queue", queue);
console.log("🚀 ~ file: queue.js ~ line 18 ~ size", s);
