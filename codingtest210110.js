/*
문제 설명
1차원 직선 상에서 두 점의 연결 정보를 나타내는 리스트 paths가 주어집니다. 두 점의 연결 정보는 [시작 점, 끝 점] 형태로 주어지며, 시작 점에서 출발해 끝 점으로는 이동할 수 있지만, 반대 방향으로는 이동할 수 없습니다.

예를 들어, paths = [[1,2], [2,3], [3,4], [8,7], [7,6]]이라면 이는

좌표 1에서 좌표 2으로 갈 수 있음
좌표 2에서 좌표 3으로 갈 수 있음
좌표 3에서 좌표 4으로 갈 수 있음
좌표 8에서 좌표 7으로 갈 수 있음
좌표 7에서 좌표 6으로 갈 수 있음
을 의미하며, 이를 그림으로 나타내면 다음과 같습니다.

Screen Shot 2017-01-16 at 6.13.52 PM.png

이때, paths 리스트에서 서로 연결되어있는 모든 경로에 대해, 최초 시작 지점과 최종 도착 지점을 알아내려 합니다.

예를 들어 위 예시에서

좌표 1에서 출발해 좌표 4에서 끝나는 경로
좌표 8에서 출발해 좌표 6에서 끝나는 경로
가 있으므로 [1,4, 8,6]을 리턴하면 됩니다.

paths 리스트에서 서로 연결되어있는 모든 경로에 대해, 최초 시작 지점과 최종 도착 지점을 보여주는 함수, solution을 작성해주세요. 단 경로가 여럿이라면 경로를 시작 지점이 작은 경로를 먼저 나열해 리턴해주세요.

제한 조건
paths는 길이가 3,000 이하인 리스트입니다.
paths의 원소는 [x1, x2] 형태이며, 이는 좌표 x1에서 좌표 x2로 갈 수 있다는 뜻입니다.
|x1-x2| = 1입니다
x1과 x2는 0 이상 100,000 이하인 정수입니다.
paths의 원소로 [x1, x2]가 주어진 경우, [x2, x1]은 주어지지 않습니다. 즉, 연결된 두 점 사이에서는 한 방향으로만 움직일 수 있습니다.
점의 연결정보가 중복해서 주어지지 않습니다.
경로끼리 겹치는 경우는 없습니다.
한 점이 동시에 서로 다른 경로의 최초 시작 지점이거나 최종 도착 지점인 경우는 없습니다.
예를 들어[[1,2],[3,2]], 혹은 [[2,1],[2,3]] 과 같은 입력은 주어지지 않습니다.
입출력 예
paths	return
[[1,2], [2,3], [3,4], [8,7], [7,6]]	[1,4,8,6]
[[1, 2], [4, 5], [10, 9], [3, 4]]	[1, 2, 3, 5, 10, 9]
입출력 예 설명
입출력 예 #1
앞서 설명한 예와 같습니다.

입출력 예 #2

1 → 2
3 → 4 → 5
10 → 9
와 같이 경로가 3개 있습니다.


문제 설명
N개의 원소를 가진 수열 A가 있습니다. 수열의 i 번째 수부터 j 번째 수까지의 합이 S가 되도록 하는 (i, j) 쌍의 개수를 구하려고 합니다(단, i ≤ j ). 1차원 배열 형태의 수열 A와 자연수 S가 매개변수로 주어질 때, 가능한 (i, j) 쌍의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
A는 자연수가 들어있는 1차원 배열이며, 길이는 100,000 이하입니다.
A의 원소는 2,000 이하의 자연수입니다.
S는 2,000 이하의 자연수입니다.
입출력 예
A	S	result
[1,1,1,1]	3	2
입출력 예 설명
입출력 예 #1

첫 번째 수부터 세 번째 수까지의 합이 3입니다.
두 번째 수부터 네 번째 수까지의 합이 3입니다.
따라서, 수열의 i 번째 수부터 j 번째 수까지의 합이 S가 되도록 하는 (i, j) 쌍은 (1, 3), (2, 4)로 두 개가 있습니다.
문제 설명
R x C 크기의 흑백 이미지가 있습니다. 1 x 1 크기의 각 칸은 한 개의 픽셀을 나타내며, 검은색 또는 흰색으로 이루어져 있고, 검은색 부분은 0, 흰색 부분은 1로 표현됩니다. 이때, 우리는 흰색으로만 이루어진 영역이 몇 개인지 찾으려고 합니다. 영역이란, 픽셀들이 가로 또는 세로로 서로 연결되어 있을 때 1개의 영역이라고 하며, 픽셀의 개수가 그 영역의 넓이가 됩니다. 단, 대각선으로 연결된 것은 같은 영역이 아닙니다.

예를 들면, 6 x 5 크기의 이미지가

이미지영역판정6_mefybp.png

로 주어질때, 흰색 영역은 4개이며, 가장 큰 넓이는 8이 됩니다.
흑백 이미지가 매개변수 v로 주어질 때, 흰색 영역의 개수와 흰색 영역 중에서 가장 큰 넓이를 return 하도록 solution 함수를 완성해 주세요. 단, 영역의 개수와 넓이 순으로 return 해주세요. 위의 예시의 경우, [4,8]을 return 하면 됩니다.

제한사항
흑백 이미지 v는 2차원 배열로 주어지며, 0 또는 1로만 이루어져 있습니다.
v는 R x C 크기의 2차원 배열입니다.
R , C : 50 이하의 자연수
입출력 예
v	answer
[[1,1,0,1,1],[0,1,1,0,0],[0,0,0,0,0],[1,1,0,1,1],[1,0,1,1,1],[1,0,1,1,1]]	[4,8]
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

문제 설명
XX 페이를 이용해서 물품을 구매한 고객들에게 10% 할인 쿠폰을 지급하려 합니다. 쿠폰을 지급하는 방법은 다음과 같습니다.

물품을 구매한 고객은 하루에 최대 1장씩 할인 쿠폰을 받습니다.
고객 한 명당 최대 k장까지 할인 쿠폰을 받을 수 있습니다.
예를 들어 고객 한 명당 k = 2장까지 할인 쿠폰을 받을 수 있고, A 고객이 3일 동안 매일 물건을 구매했다면, 이 고객은 할인 쿠폰을 두 장 받습니다.

각 날짜별로 XX 페이를 이용해 물품을 구매한 고객들의 ID가 문자열 형태로 담긴 배열 id_list, 고객 한 명당 받을 수 있는 최대 쿠폰 수 k가 매개변수로 주어질 때, 고객들에게 지급된 쿠폰은 모두 몇 장인지 return 하도록 solution 함수를 완성해주세요.

제한사항
id_list의 길이는 1 이상 1,000 이하입니다.
id_list의 원소는 각 날짜별로 물품을 구매한 고객 ID가 담긴 문자열입니다.
각 문자열의 길이는 1 이상 10,000 이하입니다.
문자열에서 고객 ID는 공백으로 구분되어 있습니다.
고객 ID의 길이는 1 이상 10 이하이며, 알파벳 대문자로만 되어있습니다.
하루에 물품을 여러 번 구매한 고객이 있을 수 있습니다.
k는 1 이상 id_list의 길이 이하인 자연수입니다.
입출력 예
id_list	k	result
["A B C D", "A D", "A B D", "B D"]	2	7
["JAY", "JAY ELLE JAY MAY", "MAY ELLE MAY", "ELLE MAY", "ELLE ELLE ELLE", "MAY"]	3	8
입출력 예 설명
입출력 예 #1

날짜	쿠폰을 받은 고객
첫째 날	A, B, C, D
둘째 날	A, D
셋째 날	B
넷째 날	없음
A 고객은 첫째, 둘째 날 쿠폰을 받고, 셋째 날에는 쿠폰을 받지 않습니다.
B 고객은 첫째, 셋째 날 쿠폰을 받고, 넷째 날에는 쿠폰을 받지 않습니다.
C 고객의 경우 첫째 날만 쿠폰을 받습니다.
D 고객은 첫째, 둘째 날 쿠폰을 받고, 셋째, 넷째 날에는 쿠폰을 받지 않습니다.
따라서 쿠폰이 총 7장 지급됐습니다.

입출력 예 #2

날짜	쿠폰을 받은 고객
첫째 날	JAY
둘째 날	JAY, ELLE, MAY
셋째 날	ELLE, MAY
넷째 날	ELLE, MAY
다섯째 날	없음
여섯째 날	없음
JAY가 둘째 날 물건을 두 번 구매했지만, 쿠폰은 하루에 1장만 받을 수 있습니다.
ELLE은 둘째, 셋째, 넷째 날 물건을 한 번씩 구매해서 쿠폰을 3장 받았습니다. 다섯째 날 물건을 세 번 구매했으나, 이미 쿠폰을 모두 받았기 때문에 쿠폰을 더 받지는 못합니다.
MAY역시 둘째, 셋째, 넷째 날 쿠폰을 받았기 때문에 마지막 날 쿠폰을 받을 수 없습니다.
따라서 쿠폰이 총 8장 지급됐습니다.

문제 설명
학생들의 출석 번호 목록과 수업에 출석한 학생의 번호를 모두 더한 결과를 알고 있을 때, 학생들이 출석한 경우의 수를 구하려 합니다.

출석 번호가 담긴 배열 students와 수업에 출석한 학생의 번호를 모두 더한 값 attendance가 매개변수로 주어질 때, 학생들이 출석하는 경우의 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
students의 길이는 1 이상 50 이하입니다.
students의 원소는 1 이상 1,000 이하인 자연수이며, 중복되는 값은 없습니다.
students의 원소는 오름차순 정렬되어 있습니다.
attendance는 1 이상 (전체 출석 번호 합) 이하인 자연수입니다.
학생들이 출석하는 방법이 적어도 한 가지 이상 있는 경우만 입력으로 주어집니다.
입출력 예
students	attendance	return
[1,3,4,7,8]	7	2
[1,3,4,7,8]	8	3
입출력 예 설명
입출력 예 #1

7번 학생 혼자 출석했을 때 출석 번호 합이 7이 됩니다.
3번 학생과 4번 학생이 출석했을 때 출석 번호 합이 7이 됩니다.
따라서 학생들이 출석하는 경우의 수는 2가지입니다.

입출력 예 #1

8번 학생 혼자 출석했을 때 출석 번호 합이 8이 됩니다.
1번 학생과 7번 학생이 출석했을 때 출석 번호 합이 8이 됩니다.
1번, 3번, 4번 학생이 출석했을 때 출석 번호 합이 8이 됩니다.
따라서 학생들이 출석하는 경우의 수는 3가지입니다.
*/
// function solution(A, S) {
//   let result = [];
//   let temp = 0;
//   if (A.length < S) return 0;
//   if (A.length >= S) {
//     for (let i = 0; i <= A.length - 1; i++) {
//       for (let j = i; j <= A.length - 1; j++) {
//         temp += A[j];
//         if (S === temp) {
//           result.push([i, j]);
//           temp = 0;
//           break;
//         }
//       }
//       temp = 0;
//     }
//   }
//   return result.length;
// }
// let s = solution([1, 1, 1, 2], 3);
// console.log("🚀 ~ file: codingtest210110.js ~ line 31 ~ s", s);

function solution(students, attendance) {
  let temp = 0;
  let count = 0;
  for (let i = 0; i <= students.length - 1; i++) {
    for (let j = i; j <= students.length - 1; j++) {
      temp += students[j];
      if (temp === attendance) {
        count++;
        break;
      } else if (temp > attendance) {
        break;
      }
    }
    temp = 0;
  }
  return count;
}
let s = solution([1, 3, 4, 7, 8], 8);
console.log("🚀 ~ file: codingtest210110.js ~ line 206 ~ s", s);
