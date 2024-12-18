/*
  문제 설명
  어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

  제한 조건
  공백은 아무리 밀어도 공백입니다.
  s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
  s의 길이는 8000이하입니다.
  n은 1 이상, 25이하인 자연수입니다.

  입출력 예
  s	n	result
  "AB"	1	"BC"
  "z"	1	"a"
  "a B z"	4	"e F d"
*/

function filterAsciiCode(char, n) {
  const asciiCode = char.charCodeAt();

  if (asciiCode === 32) return ' ';

  const sumAsciiCode = asciiCode + n;

  // 대문자 or 소문자
  if (
    (asciiCode >= 65 && asciiCode <= 90 && sumAsciiCode > 90) ||
    (asciiCode >= 97 && asciiCode <= 122 && sumAsciiCode > 122)
  ) {
    return String.fromCharCode(sumAsciiCode - 26);
  }

  return String.fromCharCode(sumAsciiCode);
}

function solution(s, n) {
  return s
    .split('')
    .map(char => filterAsciiCode(char, n))
    .join('');
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));

// 다른 사람의 풀이
function anotherSolution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
