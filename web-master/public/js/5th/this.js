// this.js

// 1) 함수
// -> Window 객체를 가리킴
function sum(n1, n2) {
  console.log(this);
  return n1 + n2;
}
sum(1, 2);


// 2) 이벤트
// -> 이벤트에서는 이벤트를 받는 대상을 가리킴
document.querySelector('table')
  .addEventListener('click', function (e) { // function을 사용하면 이벤트롤 받는 대상을 가리키고
    console.log(`e.target의 값: ${e.target}, this의 값: ${this}`);
  });

document.querySelector('table')
  .addEventListener('click', (e) => { // 화살표 함수를 사용하면 Window를 가리킴
    console.log(`e.target의 값: ${e.target}, this의 값: ${this}`);
  });


// 3) 객체
// -> 객체 자신을 가리킴
const obj = {
  name: "Hong",
  show: function () {
    console.log(this);
    return `이름은 ${obj.name} or ${this.name}`;
  }
}
console.log(obj.show());