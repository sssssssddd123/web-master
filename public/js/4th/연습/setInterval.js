// setInterval 연습

let str = 'Lorem ipsum';

let strAry = str.split(' ');

const outer = document.querySelector('.outer');

strAry.forEach(function (item) {
  let div = document.createElement('div');
  div.innerText = item;
  div.setAttribute('class', 'inner');
  outer.appendChild(div);
});

let btn = document.querySelector('#search_word');

btn.addEventListener('click', function () {
  let search = document.querySelector('#user_value').value;
  let divinner = document.querySelectorAll('div.inner');

  let OX = false;

  divinner.forEach(function (item) {
    if (search == item.innerText) {
      item.remove();
      OX = true;
    }
  });

  if (OX) {
    console.log('O');
  } else {
    console.log('X');
  }

  document.querySelector('#user_value').value = '';

})