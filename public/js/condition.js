// condition.js

// 90점 이상: 아주 잘했습니다
// 80점 이상: 잘했습니다
// 70점 이상: 보통입니다
// 60점 이상: 노력하세요
// 그 이하: 낙제입니다

function returnNum() {
  let score = document.querySelector("#user_value").value

  if (score >= 90) {
    console.log("아주 잘했습니다.")
  } else if (score >= 80) {
    console.log("잘했습니다.")
  } else if (score >= 70) {
    console.log("보통입니다.")
  } else if (score >= 60) {
    console.log("노력하세요.")
  } else {
    console.log("낙제입니다.")
  }
}

function calculate() {
  let num1 = document.querySelector("#user1").value
  let num2 = document.querySelector("#user2").value

  let opr = document.querySelector("#oper").value
  let result = 0

  switch (opr) {
    case "+":
      result = parseInt(num1) + parseInt(num2); break;
    case "-":
      result = num1 - num2; break;
    case "*":
      result = num1 * num2; break;
    case "/":
      result = num1 / num2
  }
  document.querySelector("#result").value = result


  // if (document.querySelector("#oper").value == "+") {
  //   console.log(result = parseInt(num1) + parseInt(num2))
  // } else if (document.querySelector("#oper").value == "-") {
  //   console.log(result = parseInt(num1) - parseInt(num2))
  // } else if (document.querySelector("#oper").value == "*") {
  //   console.log(result = parseInt(num1) * parseInt(num2))
  // } else if (document.querySelector("#oper").value == "/") {
  //   console.log(result = parseInt(num1) / parseInt(num2))
  // }
}