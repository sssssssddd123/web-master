// string.js

let name = "Hong";
let age = 20;
let result = '';

if (age >= 20) {
  result = "성인"
} else {
  result = "미성년"
}

result = age >= 20 ? "성인" : "미성년"; // 삼항연산자

console.log(`내 이름은 ${name == "Hong"}, ${age >= 20 ? "성인" + "입니다" : "미성년" + "입니다"}`)

// indexOf('매개값')
console.log("Hello, World".indexOf("W"));

idx = "김성태", "박명식", "홍길동".indexOf("박명석"); // 값이 없으면 -1 반환

let myFriends = ["김성태", "박명식", "홍길동"];

myFriends.forEach((item, idx, ary) => {
  if (item.indexOf("박명식") > -1) {
    console.log(`이름으로 찾기: ${item}`);
  }
  if (item.indexOf("김") == 0) {
    console.log(`성으로 찾기: ${item}`);
  }
});

// slice()
console.log("pizza, orange, cereals".slice(0, 13)); // 0부터 13번의 전 값까지 갖고옴
console.log("pizza, orange, cereals".slice(0, 13).toUpperCase()); // 소문자를 대문자로
console.log("pizza, orange, cereals".slice(-7)); // 뒤에서 7번째부터의 값을 갖고옴
console.log("pizza, orange, cereals".slice(-7).toLowerCase()); // 대문자를 소문자로
console.log("pizza, orange, cereals".substring(0, 13));


// charAt()
console.log("Hello, World".charAt(7)); // n번째 문자를 갖고옴

// replace()
console.log("Hello, World".replace("W", "ABC")); // 문자를 바꿈

// trim()
console.log("         Hello, World         ".trim()); // 좌우 공백 제거





console.log("---------------문제---------------");





// 1번. 주민등록번호로 성별 판별하기

// 주민등록번호의 뒷자리로 판별 1,3: 남, 2,4: 여
function getGender(no) {
  let num0 = no.slice(6, 8);
  let num1 = no.charAt(6);
  if (num0 == "-1" ||  num0 == "-3") {
    console.log("남자입니다")
  } else if (num1 == 1 || num1 == 3){
    console.log("남자입니다")
  } else {
    console.log("여자입니다")
  }
}

const numAry = [
  "111111-1111111",
  "222222-3222222",
  "333333-2333333",
  "1111111111111"
]

numAry.forEach((item) => {
  getGender(item);
});

console.log("---------------문제---------------");

// 2번 사용자 아이디 확인

// 메일주소에서 아이디 부분을 반환
function getId(mail){
  let num0 = mail.indexOf("@");
  let mail0 = mail.slice(0, num0);
  console.log(`아이디: ${mail0}`);
}

const emails = [
  "ldubarrye@oracle.com",
  "aschlag7@smugmug.com",
  "hiffe2@wiley.com",
  "usteptoe0@marketwatch.com",
  "aaaaaaaa@aaaa.com",
  "bbbbbb@bbbbbbbbbbb.com",
  "ccccccccccc@cccccccc.com",
  "ddd@dddddd.com",
  "eeeeee@eeeeeeeeeee.com",
];

emails.forEach((item) => {
  getId(item);
});