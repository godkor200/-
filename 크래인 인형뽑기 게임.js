/*
board
[
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
moves
[1,5,3,5,1,2,1,4]
result
4
stack
[4,3,1,1,3,2,4]
*/
function solution(board, moves) {
  //걸러내는 함수
  let basket = [];
  let count = 0;
  moves.forEach((ele) => {
    const doll = pickUp(board, ele - 1);
    if (doll && basket[basket.length - 1] === doll) {
      basket.pop();
      count += 2;
    } else {
      basket.push(doll);
    }
  });
  return count;
}
function pickUp(board, index) {
  //시작 - > 가져오는 행위부터 시작
  for (let i = 0; i < board.length; i++) {
    if (board[i][index] !== 0) {
      const doll = board[i][index];
      board[i][index] = 0;
      return doll;
    }
  }
}
let result = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
//[4,3,1,1]

console.log("🚀 ~ file: 크래인 인형뽑기 게임.js ~ line 40 ~ result", result);
// let re = pickUp(
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 3],
//     [0, 2, 5, 0, 1],
//     [4, 2, 4, 4, 2],
//     [3, 5, 1, 3, 1],
//   ],
//   0
// );
// console.log("🚀 ~ file: 크래인 인형뽑기 게임.js ~ line 49 ~ re", re);
