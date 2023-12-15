/*
  문제 설명
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

  제한 조건
  a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
  a와 b의 대소관계는 정해져있지 않습니다.
  입출력 예
  a	b	return
  3	5	12
  3	3	3
  5	3	12
*/

function solution(a, b) {
  if (a > b) {
    const temp = b;
    b = a;
    a = temp;
  }

  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12

// 다른 사람의 풀이
function adder(a, b) {
  // 가우스 수열의 합

  //함수를 완성하세요
  // (8 * 3) / 2 = 12
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(adder(3, 5));
