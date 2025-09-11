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