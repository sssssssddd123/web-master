// destructuring.js

const person = {
  name: "홍길동",
  age: 20
};

let {
  name,
  age
} = person; // 객체 destructuring

console.log(name);

// let name = person.name; // name: "홍길동"
// let age = person.age; // age: 20

const numAry = [10, 20, 30];

let [n0, n1, n2] = numAry; // 배열 destructuring

console.log(n0, n1, n2);


// 배열 메소드: forEach(), map(), filter(), reduce()
const stdAry = [{
    sNo: 100,
    sName: "홍길동",
    score: 80
  },
  {
    sNo: 200,
    sName: "김민수",
    score: 60
  },
  {
    sNo: 300,
    sName: "박민규",
    score: 70
  }
];

const newAry = stdAry.map(item => {
  const {
    sNo,
    sName
  } = item;
  return {
    sNo,
    sName
  };
})

console.log(newAry)