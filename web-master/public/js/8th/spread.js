// spread.js

// 배열도 object
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = veggie; // 객체의 주소가 동일
newVeggie.push("peas"); // 주소가 동일하니 새로운 객체에 추가하여도 동일한 값이 추가됨
console.log(veggie);
console.log(newVeggie);

const anotherVeggie = [...veggie]; // 주소를 다르게하여 새로 생성
anotherVeggie.push("ABC"); // 주소가 다르니 새로운 객체에 추가하여도 기존 객체엔 변동이 없음
console.log(anotherVeggie);


// 원시데이터 타입
let fruit = "apple";
let newFruit = fruit; // 객체의 주소가 다름
newFruit += ", mango";
console.log(fruit);
console.log(newFruit);

// 펼침연산자
function sum(...num){
  let result = 0;
  for (let n of num){
    result += n;
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5, 6));

// heap
const myFriend = {
  name: "Hong",
  age: 20
};

const yourFriend = myFriend; // heap메모리 주소가 같음
myFriend.age = 22;

const anFriend = {...myFriend};
anFriend.name = "Hwang";
anFriend.age = 27;

console.log(myFriend);
console.log(yourFriend);
console.log(anFriend); // myFriend와 주소가 다름
