// const orderedDeck = function () {
//   let suits = ["♥", "♣", "♠", "♦"];
//   let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//   let deck = [];

//   suits.forEach(function (suit) {
//     values.forEach(function (value) {
//       deck.push(value + suit);
//     });
//   });

//   return deck;
// };
// let shuffleDeck = function (deck) {
//   let result = [];
//   let deckLen = deck.length - 1;
//   let rendoms = Math.floor(Math.random() * deckLen);
//   for (let i = deckLen; i >= 0; i--) {
//     result.push(deck[rendoms]);
//     console.log(result);
//   }
// };

// const makeBoard = function (n) {
//   let board = [];
//   for (let i = 0; i < n; i++) {
//     board.push([]);
//     for (let j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.togglePiece = function (i, j) {
//     this[i][j] = !this[i][j];
//   };
//   board.hasBeenVisited = function (i, j) {
//     return !!this[i][j];
//   };
//   return board;
// };

// const robotPaths = function (n, board, i, j) {
//   let count = 0;
//   let newboard = makeBoard(n); // nXn 격자
//   let findPaths = (i, j) => {
//     if (i === n - 1 && j === n - 1) {
//       //basic
//       count++;
//       return;
//     }
//     if (i < 0 || j < 0 || j <= n || i <= n || board.hasBeenVisited(i, j)) {
//       return;
//     } else {
//       board.togglePiece(i, j);
//       findPaths(i, j + 1);
//       findPaths(i + 1, j);
//       findPaths(i, j - 1);
//       findPaths(i - 1, j);
//       board.togglePiece(i, j);
//     }
//   };

//   findPaths(0, 0);
//   return count;
// };
// const evenOccurrence = function (arr) {
//   let strTemp = [];
//   let numTemp = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] % 2 === 0 && arr[i] === arr[j]) {
//         numTemp.push(arr[i]);
//         console.log("evenOccurrence -> numTemp", numTemp[0]);
//         return numTemp[0];
//       } else if (typeof arr[i] === "string" && arr[i] === arr[j]) {
//         strTemp.push(arr[i]);
//         if (strTemp.length % 2 === 1) {
//           console.log("evenOccurrence -> strTemp", strTemp);
//           console.log("evenOccurrence -> strTemp.length", strTemp.length);
//           return null;
//         } else {
//           console.log("evenOccurrence -> strTemp", strTemp);
//           return strTemp[0];
//         }
//       }
//     }
//   }
// };

const evenOccurrence = function (arr) {
  // Your code here.

  let hash = {},
    i;
  // hash of not-even characters
  for (i = 0; i < arr.length; i++) {
    hash[arr[i]] = !hash[arr[i]];
    console.log("evenOccurrence -> hash", hash);
  }
  //  return the first even occurrence
  for (i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      console.log("evenOccurrence -> arr[i]", arr[i]);
      return arr[i];
    }
  }

  return null;
};

let onlyEvenStr = evenOccurrence(["cat", "dog", "dig", "cat"]);
let onlyEven = evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]);
let onlyEvenStrnull = evenOccurrence([
  "rob",
  "victor",
  "fred",
  "jess",
  "rob",
  "rob",
]);
