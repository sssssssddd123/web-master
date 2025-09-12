// function2.js



// 매개 값: 1 ~ n 값을 모두 더하기

function sum0(n1, n2) {
    let n3 = n1;
    let n4 = 0;

    if (n1 <= n2) {
        n3 = n2;
    }

    for (let i = 1; i <= n3; i++) {
        n4 += i;
    }
    
    console.log(`값: ${n4}`)
    // return n3;
}

sum0(1, 11)


// 큰 값을 출력하는 함수

function showMax(num1, num2) {
    if (num1 > num2) {
        console.log(`큰 값: ${num1}`);
    } else {
        console.log(`큰 값: ${num2}`);
    }
}
showMax(1111, 13123);


// 구구단 출력하는 함수
function multiplication(num0) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num0} * ${i} = ${num0 * i}`);
    }
}

multiplication(8);