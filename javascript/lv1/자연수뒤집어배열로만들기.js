/*
  문제 설명
  자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

  제한 조건
  n은 10,000,000,000이하인 자연수입니다.
  입출력 예
  n	return
  12345	[5,4,3,2,1]
*/

function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map(v => Number(v));
}

console.log(solution(12345));

// 다른 사람의 풀이
function anotherSolution(n) {
  var arr = [];

  // do while문은 무조건 한번은 실행하고 조건을 검사한다.
  do {
    // 12345 % 10 = 5, arr = [5]
    // 1234 % 10 = 4, arr = [5,4]
    // 123 % 10 = 3, arr = [5,4,3]
    // 12 % 10 = 2, arr = [5,4,3,2]
    // 1 % 10 = 1, arr = [5,4,3,2,1]
    arr.push(n % 10);
    // Math.floor(12345 / 10) = 1234
    // Math.floor(1234 / 10) = 123
    // Math.floor(123 / 10) = 12
    // Math.floor(12 / 10) = 1
    // Math.floor(1 / 10) = 0
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
