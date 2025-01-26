/*
  문제 설명
  두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

  예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
  두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

  제한사항
  3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
  X, Y는 0으로 시작하지 않습니다.
  X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

  입출력 예 설명
  입출력 예 #1
  X, Y의 짝꿍은 존재하지 않습니다. 따라서 "-1"을 return합니다.

  입출력 예 #2
  X, Y의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 "0"을 return합니다.

  입출력 예 #3
  X, Y의 짝꿍은 10이므로, "10"을 return합니다.

  입출력 예 #4
  X, Y의 짝꿍은 321입니다. 따라서 "321"을 return합니다.

  입출력 예 #5
  지문에 설명된 예시와 같습니다.
*/

function solution(X, Y) {
  let answer = '';

  // 큰 정수로 만드려면 내림차순
  for (let i = 9; i >= 0; i--) {
    // 같은 숫자 개수 찾기
    // i값과 동일한 경우 split() 하면 length가 2개 이상이 된다.
    const countX = X.split(String(i)).length - 1;
    const countY = Y.split(String(i)).length - 1;

    // x에 1이 2개이고, y에 1이 3개이면,
    // answer += 1.repeat(2)이 된다.
    answer += String(i).repeat(Math.min(countX, countY));
  }

  if (answer === '') return '-1';
  if (answer[0] === '0') return '0';

  return answer;
}
// console.log(solution('0', '000000'));
// console.log(solution('100', '2345'));
// console.log(solution('12222', '21111'));
// console.log(solution('100', '203045'));
// console.log(solution('100', '123450'));
// console.log(solution('12321', '42531'));
// console.log(solution('5525', '1255'));
console.log(solution('123477', '77008'));

// 다른 사람의 풀이
function anotherSolution(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
    .map(num => +num)
    .sort((a, b) => b - a)
    .join('');
}
