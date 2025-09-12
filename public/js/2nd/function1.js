// function1.js

// 함수: 코드의 묶음

// 10 + 5, 값을 콘솔에 출력하는 기능

let n1 = 1, // 함수 밖에서 사용하는 변수 = 전역변수
    n2 = 2;


{
    let n2 = 22;
    console.log(`${n2}`);
}
console.log(`${n2}`); // 함수호출이 아닌 함수실행

function varFunc(){ // 함수블록
    let n1 = 100;
    console.log(`local -> ${n1}`);
    // 지역변수는 반드시 함수를 호출해 줘야 사용이 가능하다
}

console.log(`global -> ${n1}`);
// 전역변수는 호출을 안 해도 사용이 가능하다
varFunc(); // 함수호출


// 전역변수, 매개변수, 지역변수
function sum0(n1, n2) { // sum0의 구역(loacl)/괄호 안에 있는 변수 매개변수
    let result0 = n1 + n2; // 함수 안에서 사용하는 변수 = 지역변수
    console.log(`결과: ${result0}`);
}


sum0();