// db.js

// 이벤트
// 추가 버튼 만들면 addPost 작동
document.querySelector('div.container>form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단
    addPost();
  });

const xhtp = new XMLHttpRequest();

// 포스트 만들기
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
    let div = makeRow(result);
    document.querySelector('#data-container').appendChild(div);

    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
  }
}



// 게시글에 대한 row 생성하는 함수
function makeRow(post) {
  let div = document.createElement("div");

  div.addEventListener('click', function () { // '댓글 불러오기'라는 div 클릭 이벤트 생성
    console.log(div)
    // div를 클릭하면 댓글 가져오기
    // const target = this; // target 변수 안에 div this를 저장
    // const post_id = this.children[0].innerHTML; // this 자녀 속의 HTML값을 계산

    // const cList = document.querySelector(".comments");
    // cList.innerHTML = "";

    // const filterList = comments.filter((item) => item.postId == post_id);

    // filterList.forEach((item) => {
    //   let div = document.createElement('div');
    //   let span = document.createElement('span');

    //   span.innerHTML = item.id;
    //   div.appendChild(span);
    //   span = document.createElement('span');
    //   span.innerHTML = item.content;
    //   div.appendChild(span);
    //   cList.appendChild(div);
    // });

    // target.appendChild(cList);
  });

  let data = JSON.parse(xhtp.responseText);
  let fields = ["id", "title", "author"];

  data.forEach(function (item, idx, ary) {
    let div = document.createElement('div');
    // console.log(ary);

    for (let i = 0; i < fields.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = item[fields[i]];
      // console.log(item[fields[i]]);
      span.setAttribute('class', 'data-' + fields[i]);
      div.appendChild(span);
    }
  })
  return div;
}


// 글목록 출력
xhtp.open('get', 'http://localhost:3000/posts');
xhtp.send();

xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText); // 글목록을 data 변수에 저장

  data.forEach(function (item) {
    let div = makeRow(item); // 게시글에 row 생성

    document.querySelector('#data-container').appendChild(div); // 게시판에 div 삽입
  })

}


// 댓글목록 생성

xhtp.open('get', 'http://localhost:3000/comments');
xhtp.send();

xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText); // 댓글목록을 data 변수에 저장
  let div = document.createElement('div');

  div.setAttribute('class', 'comments'); // 댓글 div에 class 생성
  document.querySelector('#data-container>div').appendChild(div); // 게시글 안의 div에 댓글 div 삽입

  data.forEach(function (item) {
    let div = makeRow(item); // 댓글 data를 makeRow를 통해 div 속에 저장
    document.querySelector('.comments').appendChild(div); // comments 클래스 속에 댓글 div 삽입
  })
}




















// xhtp.onload = function () {
// let data = JSON.parse(xhtp.responseText);
// let fields = ["id", "title", "author"];

// data.forEach(function (item, idx, ary) {
//   let div = document.createElement('div');
//   // console.log(ary);

//   for (let i = 0; i < fields.length; i++) {
//     let span = document.createElement('span');
//     span.innerHTML = item[fields[i]];
//     // console.log(item[fields[i]]);
//     span.setAttribute('class', 'data-' + fields[i]);
//     div.appendChild(span);
//   }

//     document.querySelector('#data-container').appendChild(div);
//   });
// }