// setInterval.js
document.querySelector('table').remove();

let str = 'Lorem ipsum'
//  dolor sit, amet consectetur adipisicing elit. Porro, iusto. Rem et repellendus autem dolores saepe voluptatum similique optio est doloribus facilis nihil consequuntur sed, suscipit nisi. Incidunt, aperiam excepturi.'
// console.log(str.length);

let strAry = str.split(' '); // 구분자(' ')를 기준으로 문자를 배열로 생성
// console.log(strAry);

const outer = document.querySelector('div.outer');

strAry.forEach(function (item, idx, ary) {
  let div = document.createElement('div'); // div Element를 생성
  div.innerText = item; // div Element안에 item 삽입
  div.setAttribute('class', 'inner'); // <div class='inner'>lorem</div>
  outer.appendChild(div);
});

document.querySelector('#search_word').addEventListener('click',
  function () {
    let search = document.querySelector('#user_value').value;

    let is_exist = false;

    document.querySelectorAll('div.inner').forEach(function (item) {
      if (search == item.innerText) {
        item.remove();
        is_exist = true;
      }
    });

    if (is_exist) {
      alert('같은 값이 있습니다');
    } else {
      alert('찾는 값이 없습니다.');
    }

    document.querySelector('#user_value').value = '';

    console.log(document.querySelectorAll('div.inner').length);

  })

let timing = 11;
let end = true;

setInterval(function () {
  let length = document.querySelectorAll('div.inner').length
  if (timing >= 0) {
    console.log(timing--);
  }

  if (timing > 0 && length == 0 && end) {
    alert('성공');
    end = false;
  } else if (timing == 0 && end) {
    alert('실패');
  }
}, 1000);