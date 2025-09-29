// fetch.js

fetch('http://localhost:3000/posts') // Promise 객체 반환
  .then(function (첫번째) {
    console.log(첫번째);
    return 첫번째.json(); // 자바스크립트 객체로 변경해줌
  })
  .then(function (두번째) {
    console.log(두번째);
  })
  .catch(function (에러임) {
    console.log(에러임);
  });