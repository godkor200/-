function solution(skill, skill_trees) {
  let result = 0;
  let filteredTrees = skill_trees.map((ele) =>
    ele.split('').filter((char) => skill.includes(char))
  );
  for (let i = 0; i < filteredTrees.length; i++) {
    let isValid = true;
    for (let j = 0; j < filteredTrees[i].length; j++) {
      if (skill[j] !== filteredTrees[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      result++;
    }
  }
  return result;
}
console.log(solution('CBD', ['C', 'D', 'CB', 'BDA']));
//     skill_trees 에서 skill 의 요소가 아닌 애들을 제거한 애들로 새로 만듬
// skill과 skill char 로만 구성된 요소들을 비교
//     순서가 일치하지 않으면 out
