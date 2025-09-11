// test3.js

// prompt 사용, 2개 입력
// 두 수의 합이 3의 배수인지 판별

let num1 = parseInt(prompt("첫 번째 값"))
let num2 = parseInt(prompt("두 번째 값"))
let result = num1 + num2

if (result % 3 == 0) {
  console.log(result + "는 3의 배수입니다.")
} else {
  console.log(result + "는 3의 배수가 아닙니다")
}