// todo.js

// 2개의 값을 입력받도록 화면을 html에 구성
// 계산하는 기능을 구현
// +, -, *, /
// plus, minus, multiply, divide 함수 이름

function calculate() {
  let num0 = parseInt(document.querySelector('#num0').value),
      num1 = parseInt(document.querySelector('#num1').value),
      op = document.querySelector('#selector').value,
      result = 0;

  switch (op) {
    case '+':
      result = num0+num1;
      break;
    case '-':
      result = num0-num1;
      break;
    case '*':
      result = num0*num1;
      break;
    case '/':
      result = num0/num1;
  }

  document.querySelector('#num2').value = result;

}