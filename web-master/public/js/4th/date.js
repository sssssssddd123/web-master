// date.js

function toDay() {
  const now = new Date();
  console.log(now.toLocaleDateString() + now.toLocaleTimeString());

  let today = new Date('2025-09-16 10:30:30');
  console.log(`월: ` + (today.getMonth() + 1));
  // 0, 1, 2, 3, ... 11 + 1을 해줘야 정상적인 월이 출력됨

  console.log(`일: ` + today.getDate()); // 일

  console.log(`요일: ` + today.getDay()); // 일요일(0) ~ 토요일(6)

  today.setFullYear(2024);
  today.setMonth(2);
  today.setDate(14);
  console.log(today.toLocaleDateString() + today.toLocaleTimeString());

  console.log(`월: ` + (today.getMonth() + 1));
  console.log(`일: ` + today.getDate());
  console.log(`요일: ` + today.getDay());
};

// toDay()

// 날짜를 입력하면 '2022-11-11' 요일 정보를 반환해주는 함수
function transLastDay(date) {
  let dateAry = ['일', '월', '화', '수', '목', '금', '토'];
  let getday =  new Date(date).getDay();

  return `${date}는(은) ${dateAry[getday]}요일입니다`;
};

let date = '2022-11-11';
console.log(transLastDay(date));