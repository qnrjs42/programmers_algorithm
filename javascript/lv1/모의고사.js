/*
  문제 설명
  수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한 조건
  시험은 최대 10,000 문제로 구성되어있습니다.
  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
  입출력 예
  answers	return
  [1,2,3,4,5]	[1]
  [1,3,2,4,2]	[1,2,3]
  입출력 예 설명
  입출력 예 #1

  수포자 1은 모든 문제를 맞혔습니다.
  수포자 2는 모든 문제를 틀렸습니다.
  수포자 3은 모든 문제를 틀렸습니다.
  따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

  입출력 예 #2

  모든 사람이 2문제씩을 맞췄습니다.
*/

function solution(answers) {
  const persons = [
    [1, 2, 3, 4, 5], // 5
    [2, 1, 2, 3, 2, 4, 2, 5], // 8
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10
  ];

  const counts = [0, 0, 0];

  answers.forEach((answer, answerIndex) => {
    if (answer === persons[0][answerIndex % persons[0].length]) counts[0]++;
    if (answer === persons[1][answerIndex % persons[1].length]) counts[1]++;
    if (answer === persons[2][answerIndex % persons[2].length]) counts[2]++;
  });

  const max = Math.max(...counts);
  return counts
    .map((value, valueIndex) => (value >= max ? valueIndex + 1 : 0))
    .filter(value => value > 0)
    .sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

// 다른 사람의 풀이
function anotherSolution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
