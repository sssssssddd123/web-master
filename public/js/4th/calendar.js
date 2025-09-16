// calendar.js


// 8월 1일
// 2025-08-01 -> getDay() 요일 정보
// 8월의 마지막 날 -> 

// 매개값으로 년, 월 활용
let yyyy = 2025, // 현재의 년
  mm = 8; // 현재의 월

// 캘린더의 줄
let tr = document.createElement('tr');

// 전월의 마지막 날짜
// 공란의 개수 구하기
let today = new Date();
today.setFullYear(yyyy);
today.setMonth(mm - 1);
today.setDate(1);
let spaces = today.getDay();
// getDay는 요일을 숫자로 바꿔주니 숫자 = 공란의 개수가 됨

// 공란의 개수 달력에 출력
for (let s = 0; s < spaces; s++) { // 공란
  let td = document.createElement('td');
  tr.appendChild(td)
}

// 이번달 마지막 날 계산
let Lastday = new Date(today.getTime() - (1000 * 60 * 60 * 24)).getDate();

// 마지막 날짜 달력에 출력
for (let d = 1; d <= Lastday; d++) { // 날짜
  let td = document.createElement('td');
  td.innerHTML = d;
  tr.appendChild(td);

  if ((d + spaces) % 7 == 0) {
    td.setAttribute('class', 'saturday');
    document.querySelector('tbody').appendChild(tr);
    tr = document.createElement('tr');
  } else if ((d + spaces) % 7 == 1) {
    td.setAttribute('class', 'sunday');
  }

  document.querySelector('tbody').appendChild(tr);
} // for