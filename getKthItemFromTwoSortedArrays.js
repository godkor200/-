const getKthItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let left = 0;
  let right = 0;
  let result;
  for (let idx = 0; idx < k; idx++) {
    if (arr1[left] < arr2[right]) {
      result = arr1[left];
      left++;
    } else {
      result = arr2[right];
      right++;
    }
  }
  return result;
};
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getKthItemFromTwoSortedArrays(arr1, arr2, 5);
console.log(result); // --> 8

//me
const getKthItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let resultSort = arr1.concat(arr2).sort((a, b) => a - b);
  return resultSort[k - 1];
};

// for Basic
// const getKthItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   let cnt = 0,
//     left = 0,
//     right = 0;
//   let target;
//   while (cnt < k) {
//     if (arr1[left] < arr2[right]) {
//       target = arr1[left];
//       left++;
//     } else {
//       target = arr2[right];
//       right++;
//     }
//     cnt++;
//   }
//   return target;
// };

// for Advanced
// const getKthItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   let leftIdx = 0,
//     rightIdx = 0;

//   while (k > 0) {
//     let cnt = Math.ceil(k / 2);
//     let leftStep = cnt,
//       rightStep = cnt;

//     if (leftIdx === arr1.length) {
//       rightIdx = rightIdx + k;
//       break;
//     }

//     if (rightIdx === arr2.length) {
//       leftIdx = leftIdx + k;
//       break;
//     }

//     if (cnt > arr1.length - leftIdx) leftIdxStep = arr1.length - leftIdx;
//     if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

//     if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
//       leftIdx = leftIdx + leftStep;
//       k = k - leftStep;
//     } else {
//       rightIdx = rightIdx + rightStep;
//       k = k - rightStep;
//     }
//   }

//   leftMax = arr1[leftIdx - 1] || -1;
//   rightMax = arr2[rightIdx - 1] || -1;

//   return Math.max(leftMax, rightMax);
// };
