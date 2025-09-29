// array.js

const names = ["김기홍", "박수홍", "황민우", "최민우", "김길동"];

// filter() => true 값에 해당하는 요소를 새로운 배열에 저장
// const result = names.filter(item => {
//   // return item.indexOf("김") ? true : false; // 삼항연산자
//   if (item.indexOf("김") == 0) {
//     console.log(`${item}: true`);
//     return true;
//   } else {
//     console.log(`${item}: false`);
//     return false;
//   }
// });

// 좀 더 간략하게
const result = names.filter(item => item.indexOf("김") == 0);
console.log(result)


// 짝수만 출력
const numbers = [23, 44, 22, 57, 80, 19];

const evenNumbers = numbers.filter(item => item % 2 == 0);
console.log(evenNumbers);

// map() A => A'라는 형식으로 새로운 데이터를 만들어서 출력
const students = [
  {sno: 100, sname: "권수민", score: 80},
  {sno: 200, sname: "송승일", score: 75},
  {sno: 300, sname: "배진욱", score: 85},
  {sno: 400, sname: "박세민", score: 55},
];

const pass = students.map(item => {
  let {sno, sname} = item;
  let isPass = item.score > 60 ? "pass" : "fail";
  return {sno, sname, isPass};
});

console.log(pass);

pass.forEach(item => {
  if(item.isPass == "pass"){
    console.log(item);
  };
});

students
  .map(item => {
    let {sno, sname} = item;
    let isPass = item.score >= 60 ? "pass" : "fail";
    return {sno, sname, isPass}
  })
  .filter(item => item.isPass == "pass")
  .forEach(item => {
    console.log(item);
  });