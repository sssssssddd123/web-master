// scope.js

// 전역(global) vs 지역(local)

// var & let, const의 차이점
// var는 블록단위는 무시하고, let는 블록단위로 변수를 선언함 


var myAge = 20; // 전역: 함수 밖에 있는 변수

function showAge() {
  var myAge = 22; // 지역: 함수 안에 있는 변수, 함수의 영역 안에서만 유효함
  console.log(myAge + 1);
}
showAge();

{ // 함수가 아닌 단순 블록이므로 전역 변수에 해당됨
  myAge += 1;
}

{
  var myAge = 10;
  myAge += 1;
}

console.log(myAge + 1);