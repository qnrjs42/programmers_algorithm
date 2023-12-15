/*
  문제 설명
  함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

  제한 조건
  n은 1이상 8000000000 이하인 자연수입니다.
  입출력 예
  n	return
  118372	873211
*/

function solution(n) {
  const arr = Array.from(String(n), Number);
  return Number(
    arr
      .sort()
      .reverse()
      .reduce((prev, current) => `${prev}${current}`, '')
  );
}

console.log(solution(118372)); // 873211

// 다른 사람의 풀이
function solution(n) {
  const newN = n + ''; // 문자열 변환
  // split('') 문자열 -> 배열 변환
  // sort() 오름차순 배열 정렬
  // reverse() 내림차순 배열 정렬
  // join('') 배열 -> 문자열 변환
  const newArr = newN.split('').sort().reverse().join('');

  // +newArr 문자열 -> 숫자 변환
  return +newArr;
}
