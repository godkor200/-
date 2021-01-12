class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    let node = new Node(value);
    this._size++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  remove(value) {}

  getNodeAt(index) {}

  contains(value) {}

  indexOf(value) {}

  size() {}
}
let linkedList = new LinkedList();
linkedList.addToTail(4);
linkedList.addToTail(5);
// linkedList.addToTail(6);

console.log("🚀 ~ file: linkedList.js ~ line 31 ~ LinkedList", linkedList);
