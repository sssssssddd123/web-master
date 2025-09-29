// ajax.js

// 비동기방식 vs 동기방식

// 비동기방식은
// 코드가 직렬이 아닌 병렬로 실행이 되어 각 코드마다 출력되는 순서가 차이난다
// 그로 인해 상대적으로 코드가 짧아 빨리 처리되는 console.log 가
// 위의 코드보다 더 빨리 도착점에 도달해 우선으로 출력이 된다
function backUp0() {
  let members = [];

  const xhtp = new XMLHttpRequest();
  xhtp.open('get', '../5th/data.json');
  xhtp.send();
  xhtp.onload = function () {
    members = JSON.parse(xhtp.responseText);
  }

  console.log(members); // XMLHttpRequest이 더 늦게 실행되고 console.log가 먼저 실행된다
};

// setTimeout으로 보는 비동기방식 처리 예제
function backUp1() {
  setTimeout(function () {
    console.log("첫 번째 함수");
  }, 1000);

  setTimeout(function () {
    console.log("두 번째 함수")
  }, 2000);

  setTimeout(function () {
    console.log("세 번째 함수")
  }, 500);
}
/*
// 동기방식
setTimeout(function () {
  console.log("첫 번째 함수");

  setTimeout(function () {
    console.log("두 번째 함수");

    setTimeout(function () {
      console.log("세 번째 함수");
    }, 500);
  }, 2000);
}, 1000);
*/




