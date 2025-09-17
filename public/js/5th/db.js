// db.js

// 이벤트
document.querySelector('div.container>form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단
    addPost();
  });

const xhtp = new XMLHttpRequest();

function addPost() {
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;

  xhtp.open('post', 'http://localhost:3000/posts') // 요청헤더: 컨텐트 형식 지정.

  xhtp.setRequestHeader('Content-Type', 'application/json;charset=uft-8')
  xhtp.send(JSON.stringify({
    title: title,
    author: author
  }));

  xhtp.onload = function () {
    let result = JSON.parse(xhtp.responseText);
    location.reload();
  }
}

xhtp.open('get', 'http://localhost:3000/posts'); // post를 get한다
xhtp.send(); // get한 파일을 실행

// 실행된 파일을 load한다
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  let fields = ["id", "title", "author"];

  data.forEach(function (item, idx, ary) {
    let div = document.createElement('div');
    console.log(ary);

    for (let i = 0; i < fields.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = item[fields[i]];
      console.log(item[fields[i]]);
      span.setAttribute('class', 'data-' + fields[i]);
      div.appendChild(span);
    }

    document.querySelector('#data-container').appendChild(div);
  });
}