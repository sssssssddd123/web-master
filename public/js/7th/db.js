//  db.js



// 게시글 목록
fetch('http://localhost:3000/posts')
  .then((response) => response.json()) // json 문자열로 저장되어 있는 글 목록 가져오기
  .then((data) => {
    let fields = ["id", "title", "author"]; // 목록 HTML에 저장할 값을 지정
    data.forEach(item => { // 데이터 값 속에 있는 item의 개수만큼 div를 생성
      let div = document.createElement('div');

      for (let i = 0; i < fields.length; i++) { // item속에 fields에서 지정한 값을 저장 후 생성된 div 속에 appendChild를 해줌
        let span = document.createElement('span');
        span.innerHTML = item[fields[i]];
        span.setAttribute('class', 'data-' + fields[i]);
        div.appendChild(span);
      }
      // console.log(data)

      document.querySelector('#data-container').appendChild(div); // 최종적으로 만들어진 div를 #data-container 속에 appendChild를 해줌
    });
  })
  .catch((err) => console.log(err));


// 추가 버튼을 누르면 글이 등록됨
document.forms["postForm"].addEventListener('submit', function (e) { // document.forms["postForm"]를 활용하여 postForm이란 name을 가진 영역에 이벤트를 부여
  e.preventDefault(); // form 속에 action="./index.html"라는 기능이 부여되어 있어 그 기능이 작동 못하게 막아줌
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;

  if(title == "" || author == ""){ // input 속에 둘 중 하나라도 빈 값이 있으면 경고 표시
    alert('값을 입력하세요.');
    return;
  }

  fetch('http://localhost:3000/posts', { // 서버에 저장되어 있는 db 값을 호출
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ // title, author 값을 자바스크립트 객체로 바꿔줌
        title,
        author
      })
    })
    // .then((response) => response.json()) // 정상적으로 작동하는지 console에서 확인
    // .then((result) => {
    //   console.log(result)
    // })
    .catch((err) => console.log(err));

  document.querySelector('input[name="title"]').value = '';
  document.querySelector('input[name="author"]').value = '';
})







































// json 문자열로 저장되어 있는 글 목록 가져오기
// .then((data) => {
//   let fields = ["id", "title", "author"]; // 목록 HTML에 저장할 값을 지정
//   data.forEach(item => { // 데이터 값 속에 있는 item의 개수만큼 div를 생성
//     let div = document.createElement('div');

//     for (let i = 0; i < fields.length; i++) { // item속에 fields에서 지정한 값을 저장 후 생성된 div 속에 appendChild를 해줌
//       let span = document.createElement('span');
//       span.innerHTML = item[fields[i]];
//       span.setAttribute('class', 'data-' + fields[i]);
//       div.appendChild(span);
//     }
//     console.log(data)

//     document.querySelector('#data-container').appendChild(div); // 최종적으로 만들어진 div를 #data-container 속에 appendChild를 해줌
//   });
// })