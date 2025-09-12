// operator.js

let num1 = 10; // 변수를 넣어 선언하는 것을 변수 초기화라고 한다.
let num2 = 20;
let result; // 그냥 변수만 선언하는 것은 초기화가 아니다.

result = num1 * num2;

console.log("결과는 " + result);

console.log("결과는 " + num1 + num2);
// ""이 앞에 있으니 뒤에도 ""처리가 됨
console.log(num1 + num2 + "입니다.");
// 숫자가 앞에 있으니 숫자 연산 후 ""처리 됨

num1 = 425;
result = num1 % num2;
console.log(result);
// % -> 나누고 남는 값으로 출력

// 조건문
if (num1 % 2 == 1) {
  console.log("홀수입니다.");
} // 실행 O

if (num1 % 2 == 0) {
  console.log("짝수입니다.");
} // 실행 X