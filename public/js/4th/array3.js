// array3.js

// 객체

const friends = [{
  name: '김우진',
  phone: '010-1111-1111'
}];

friends.push({
  name: '박은식',
  phone: '010-2222-2222'
});

friends.push({
  name: '김우식',
  phone: '010-3333-3333'
});

// let search = prompt('연락처를 찾을 친구의 이름을 입력: ');
// forEach
let search;
friends.forEach(function (item, idx, ary) {
  if (item.name == search) {
    console.log(`친구의 연락처는: ${item.phone}`);
  }
});


// data 사원정보
// 1. 급여가 5000 이상의 사원 출력.
// "이름, 급여"

// 2. 남자 사원들만 maleAry라는 변수에 담기

// const maleAry = [];

// data.forEach(function (item, idx, ary) {
  // console.log(item);
  // if (item.salary >= 5000) { // 1. 연봉 5000 이상
  //   console.log(`사원 이름: ${item.first_name}, 연봉: ${item.salary}`);
  // }

//   if (item.gender == 'Male') {
//     maleAry.unshift(item);
//   }
// });

// console.log(maleAry.sort(function (a, b) {
//   if (a.salary < b.salary) {
//     return -1;
//   } else {
//     return 1;
//   }
// }));

// console.log([10, 12, 123, 512, 62, 1, 41, 12, 523].sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// }));