// function solution(priorities, location) {
//   let printCount = 0;
//   let myDoc = location;

//   while (priorities.length > 0) {
//     let firstDoc = priorities.shift();
//     let prior = priorities.filter((e) => e > firstDoc);
//     if (prior.length > 0) {
//       priorities.push(firstDoc);
//     } else {
//       printCount++;
//       if (myDoc === 0) {
//         return printCount;
//       }
//     }
//     myDoc--;
//     if (myDoc === -1) {
//       myDoc = priorities.length - 1;
//     }
//   }
// }

function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    let cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
    console.log('🚀 ~ file: 프린터.js ~ line 31 ~ solution ~ cur', list);
  }
}
// function solution(priorities, location) {
//   var list = priorities.map((t, i) => ({
//     my: i === location,
//     val: t,
//   }));
//   var count = 0;
//   while (true) {
//     var cur = list.splice(0, 1)[0];
//     if (list.some((t) => t.val > cur.val)) {
//       list.push(cur);
//     } else {
//       count++;
//       if (cur.my) return count;
//     }
//   }
// }
// solution([2, 1, 3, 2], 2);
// solution([1, 1, 9, 1, 1, 1], 0);
console.log('🚀', solution([2, 1, 3, 2], 2));
console.log('🚀', solution([1, 1, 9, 1, 1, 1], 0));
