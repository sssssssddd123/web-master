// variable.js

// 변수
let my_name = "송승일";
let my_age = "3";
let pets = [{
  name: "야옹이",
  age: 3
}, {
  name: "멍멍이",
  age: 4
}];

// console.log(my_name);
// console.log(pets[1]);

// 객체
let myFriend = {
  name: "홍길동",
  age: 20,
  phone: "010-1111-2222",
  address: "대구 중구 100번지"
} // 여러 변수를 한번에 저장

// console.log(myFriend.name);
// console.log(myFriend.age);

console.log(pets[0].age);
pets[0].age = 2;
console.log(pets[0].age);