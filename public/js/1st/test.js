// test.js

// 학생(학생번호: 101, 학생이름: 김민수, 영어: 87, 수학: 90)

let user = {
  userNum: 101,
  userName: "김민수",
  score1: 87,
  score2: 90
};

console.log("이름은 " + user.userName);
console.log(user.userName + "의 영어점수는 " + user.score1 + "점입니다");
user.userName = "김만수";
console.log("아 ㅈㅅ;; 이름이 " + user.userName + "였네요. " + user.userName + "의 영어점수는 " + user.score1 + "점입니다");

// 
// let fruits = [{
//   num1: "사과"
// }, {
//   num2: "복숭아"
// }, {
//   num3: "수박"
// }];
let fruits = ["사과", "복숭아", "수박"];

console.log("내가 좋아하는 과일은 " + fruits[0])