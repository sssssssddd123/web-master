// while12.js

// 학생 점수를 입력 ->
// while 반복을 활용하여 입력 받은 학생의 총 점수를 구하기
let userValue = 0,
    sum0 = 0,
    count = 0;

while (true) {
    userValue = prompt("숫자를 입력하세요. 종료하려면 exit");

    if (userValue == "exit") {
        break;
    }

    sum0 += parseInt(userValue);

    count++;

    // if (sum0 == "NaN") { 작동이 안 됨 물어보기
    //     console.log(`Error 숫자만 입력하세요.`)
    //     break;
    // }
}

console.log(`인원: ${count}, 점수의 합: ${sum0}, 평균: ${sum0/count}`);