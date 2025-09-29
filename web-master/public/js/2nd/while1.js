// while1.js
// 반복문

// 1 ~ 10까지 출력
let i = 1;
while (i <= 10) { // while
    console.log(`i의 값: ${i}`);
    i++;
}

// 조건을 만족할 동안만 실행
while (true) {
    let rv = parseInt(Math.random() * 10);
    console.log(`랜덤 값: ${rv}`);
    if (rv == 0) {
        break; // while 종료
    }
}
console.log(`종료`)