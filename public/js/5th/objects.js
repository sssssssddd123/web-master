// objects.js

let obj = {};
let obj2 = obj;

console.log(obj == obj2);

let obj3 = {};

obj.name = 'Hong';
obj.age = 20;

obj3.name = 'Hong';
obj3.age = 20;

console.log(obj == obj3);
console.log(obj['age'] == obj3['age']);

// 원시 데이터 타입
let str1 = 'Hong';
let str2 = 'Hong';

console.log(str1 == str2);

console.log(typeof obj3.age); // obj3 안에 있는 age의 타입이 무엇인가?

let ary = [];
console.log(typeof ary); // ary의 타입이 무엇인가?

str1 = 10;
str2 = '10';
console.log(str1 == str2); // 내용만 같은지 확인 / true
console.log(str1 === str2); // 내용의 타입까지 같은지 확인 / false

// 함수 정의식, 함수 표현식
// function sum(num1, num2) { // 함수 정의식
//   return num1 + num2;
// }

// const sum = function (num1, num2) { // 함수 표현식
//   return num1 + num2;
// }

// 줄인 표현식 => 화살표 함수.
const sum = (num1 = 0, num2 = 0) => num1 + num2

console.log(sum(sum(1, 2), sum(2)));

// 줄인 표현식 예제
// [23, 10, 17, 45].forEach((item) => console.log(item));