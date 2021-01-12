const isPalindromeLL = function (head) {
  let values = [];
  while (head) {
    values.push(head.value);
    head = head.next;
    console.log(values);
  }
  for (let i = 0; i < values.length >> 1; i++) {
    if (values[i] !== values[values.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.next = null;
};

let makeLinkedList = (arr) => {
  const nodes = arr.map((data) => new Node(data));
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].next = nodes[i];
  }
  return nodes[0];
};

let head = makeLinkedList([1, 2, 3, 2, 1]);
// console.log("head", head);
// console.log(head.next.next);
let result = isPalindromeLL(head);
console.log(result); // --> true
