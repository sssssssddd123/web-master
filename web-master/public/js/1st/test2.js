// test2.js

let friend1 = {
  name: "박규태",
  height: 172
}

let friend2 = {
  name: "김민식",
  height: 180
}

// 박규태가 김민식보다 크냐?
// 박규태가 크다 or 박규태가 작다

// if (friend1.height < friend2.height) {
//   console.log(friend2.name + "이(가) 크다.");
// }

// friend1.height = 181
// if (friend1.height > friend2.height) {
//   console.log(friend1.name + "이(가) 크다.");
// }

// friend1.height = friend2.height
// if (friend1.height == friend2.height) {
//   console.log("두 사람의 키가 같다.")
// }

let num3 = prompt("값: ")
console.log(num3)

// if, else
if (num3 % 2 == 1) {
  console.log("홀수입니다.") // 조건만족
} else { 
  console.log("짝수입니다.") // 그 외일 경우
}