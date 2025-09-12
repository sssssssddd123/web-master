// for2.js
// 조건문 추가


// sum += 1; // sum = sum + 1;
// sum++; //sum = sum + 1;


let sum0 = 0;
// console.log(parseInt(Math.random() * 100)); // Math.random()는 0 <= x < 1 값을 랜덤으로 출력

// 1~10까지의 값만 선택하여 2의 배수, 3의 배수 합 구하기
let sum3 = 0,
    sum4 = 0,
    sum5 = 0;

for (i = 1; i <= 100; i++) {
    sum3 = parseInt(Math.random() * 10) + 1;

    if (sum3 % 2 == 0) {
        sum4 += sum3;
    }

    if (sum3 % 3 == 0) {
        sum5 += sum3;
    }
}

console.log(sum4, sum5);


// 1 ~ 100 값중에서 2의 배수, 3의 배수
let sum1 = 0,
    sum2 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum1 += i;
    } else if (i % 3 == 0) {
        sum2 += i;
    }
}

console.log(`2의 배수의 합은: ${sum1}, 3의 배수의 합은: ${sum1-sum2}`)

// 1 ~ 100 값중에서 3의 배수의 합을 구하기
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum += i;
    }
}
console.log(`3의 배수의 합은: ${sum}`)

// 1 ~ 10까지 합이 30보다 크면 출력
// for (let i = 1; i <= 10; i++) {
//     sum += i;
//     if (sum >= 30) {
//         console.log(`현재 i의 값은: ${i}, sum의 값은: ${sum}`)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     // 짝수일 때만 출력
//     if (i % 2 == 0) {
//         console.log(`현재 i의 값은: ${i}`)
//     }
// }