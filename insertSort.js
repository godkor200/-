var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

let insertionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        let front = array[j];
        array[j] = array[j + 1];
        array[j + 1] = front;
      }
    }
  }
  return array;
};

let array = [
  { value: 1, i: 0 },
  { value: 2, i: 2 },
  { value: 21, i: 4 },
  { value: 43, i: 3 },
  { value: 100, i: 1 },
];
console.log(insertionSort(array));
