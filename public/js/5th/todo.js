// todo.js

// 반복문을 활용해서 출력

//     *
//    **
//   ***
//  ****
// *****

let star = "";
let spacebar = "";
let num = 0;

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 4 - num; i++) {
    spacebar += " ";
  }

  num++
  star += "*";
  console.log(spacebar + star);

  spacebar = "";
}

//     *
//    ***
//   *****
//  *******
// *********

star = "";
spacebar = "";
num = 0;

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 4 - num; i++) {
    spacebar += " ";
  }

  num++
  star += "*";
  console.log(spacebar + star);
  star += "*";

  spacebar = "";
}

// *********
//  *******
//   *****
//    ***
//     *

star = "";
spacebar = "";
num = 7;


for (let i = 0; i < 5; i++) {
  for (let i = 0; i < num; i++) {
    star += "*";
  }

  spacebar += " ";
  console.log(spacebar + star);

  star = "";
  num -= 2;
}