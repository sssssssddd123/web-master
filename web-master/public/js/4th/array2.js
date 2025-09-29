// array2.js

const numAry = new Array(); // [];
numAry.push(10); // 배열 안의 값은 변경이 가능하나,
// numAry = []; // 상수(const)는 재할당이 불가능하다. let은 가능
numAry.push(25); // [10, 25]

numAry.push(34);
numAry.unshift(47);
numAry.splice(2, 0, 33);
numAry.splice(2, 0, 22, 19);

let sum = 0;
numAry.forEach(function (item, idx, ary) {
    console.log(`item: ${item}, idx: ${idx}, ary: ${ary}`);
    // item = 10 
    // idx = index(n번째)
    // ary = 배열 출력

    // 홀수의 합
    // if (item % 2 == 1) {
    //     sum += item;
    // }

    // 홀수번째의 합
    // if (idx % 2 == 0) {
    //     sum += item;
    // }

    // 첫 번째, 마지막 값의 합
    if (idx == 0 || (idx + 1) == numAry.length) {
        sum += item;
    }

});
console.log(`sum의 값은: ${sum}`)