// promise.js

// 콜백함수를 순차적으로 구성

// 함수를 매개값으로 넣는다

function 함수임(값1, 값2, 함수속의_함수임) { // 매개값 함수 생성
  return 함수속의_함수임(값1, 값2);
};

let result = 함수임(10, 20, function (값11, 값22) { // 변수 속에 함수 담기
  return 값11 * 값22;
});

const 프로미스스스스 = new Promise(function (resolve, reject) {
  reject("NG");
}); // new Object()

프로미스스스스 // 성공하면 then, 실패하면 catch 아입니꺼~~!!
  .then(function (resopnse) {
    console.log(resopnse);
  })
  .then(function (resopnse) {
    console.log(resopnse);
  })
  .then(function (resopnse) {
    console.log(resopnse);
  })
  .catch(function (err) {
    console.log(err);
  })
  .catch(function (err) {
    console.log(err);
  })
  .catch(function (err) {
    console.log(err);
  });