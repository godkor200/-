var singleNumber = function (nums) {
  //배열정리 sort
  //[1,1,2,2,4]
  //for loop
  let sortArr = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 2);
      i = 0;
    }
  }
};

^= xor

singleNumber([2, 2, 1]);
