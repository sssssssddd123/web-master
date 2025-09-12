// todo.js

function calculate() {
  let num1 = document.querySelector("#user1").value
  let num2 = document.querySelector("#user2").value

  let opr = document.querySelector("#oper").value
  let result = 0

  // switch (opr) {
  //   case "+":
  //     result = parseInt(num1) + parseInt(num2); break;
  //   case "-":
  //     result = num1 - num2; break;
  //   case "*":
  //     result = num1 * num2; break;
  //   case "/":
  //     result = num1 / num2
  // }
  // document.querySelector("#result").value = result

  if (document.querySelector("#oper").value == "+") {
    result = parseInt(num1) + parseInt(num2)
  } else if (document.querySelector("#oper").value == "-") {
    result = parseInt(num1) - parseInt(num2)
  } else if (document.querySelector("#oper").value == "*") {
    result = parseInt(num1) * parseInt(num2)
  } else if (document.querySelector("#oper").value == "/") {
    result = parseInt(num1) / parseInt(num2)
  }

  document.querySelector("#result").value = result
}