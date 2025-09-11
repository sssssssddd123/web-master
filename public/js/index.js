// 자바스크립트 영역
// 1. 값을 저장
//    -> 변수를 활용
// 2. 기능
//    -> 함수를 활용

// 변수
let user_id = "user01"; // 문자열
let user_age = 20; // 숫자
let is_child = false;

// 함수
function show_info() {
  // console.log("회원의 이름은" + user_id);
}
show_info(); // 함수 실행

// Hello, World -> 안녕
function changeTest() {
  // 화면요소를 선택
  document.querySelector('#test1').innerHTML = "안녕";
}