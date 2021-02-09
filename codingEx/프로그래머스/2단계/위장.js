function solution(clothes) {
  let result = 1;
  let sorts = {};
  clothes.map((cloth) =>
    sorts[cloth[1]] ? sorts[cloth[1]]++ : (sorts[cloth[1]] = 1)
  );
  console.log('🚀 ~ file: 위장.js ~ line 9 ~ solution ~ sorts', sorts);
  for (let i of Object.values(sorts)) {
    result *= i + 1;
  }
  return result - 1;
}
console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
