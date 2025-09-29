// array1.js

const obj = {
    name: '홍길동',
    age: 20,
    showInfo: function () {
        return `이름은 ${obj.name}, 나이는 ${obj.age}`;
    }
}

const fruits = ['사과', '복숭아'];
fruits[fruits.length] = '배';
fruits[fruits.length] = '참외';
fruits[0] = '포도';
delete fruits[0]; // undefined

// 메소드 추가, 삭제(push, pop) / 제일 마지막에 추가, 제거
fruits.push('메론'); // 제일 마지막에 추가하는 기능
fruits.pop(); // 제일 마지막에 있는 것을 제거

// unshift, shift / 제일 앞에 추가, 제거
fruits.unshift('메론'); // 메론, undefined, 복숭아, 배, 참외
fruits.shift(); // undefined, 복숭아, 배, 참외

// splice(인덱스 위치, 삭제할 개수) / 삭제하는 기능
fruits.splice(1, 1); // [undefined, '배', '참외']

// splice(인덱스 위치, 교체할 개수) / 교체하는 기능
fruits.splice(0, 1, '사과'); // ['사과', '배', '참외']
// 0의 위치에 1개의 값을 삭제 후 '사과'을 삽입

fruits.splice(1, 0, '수박'); // ['사과', '수박', '배', '참외']
// 1의 위치에 0, '수박'(삭제하지 않고 '수박'을 삽입)

fruits.splice(1, 3, '수박'); // ['사과', '수박']
// 1의 위치에 3개의 값을 삭제 후 '수박'을 삽입


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}










