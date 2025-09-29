// event.js

let students = [{
    stdNo: 100,
    stdName: '홍길동',
    score: 80
}, {
    stdNo: 200,
    stdName: '김길동',
    score: 83
}];

document.querySelector('button#addBtn').
addEventListener('click', function () {
    let sNo = document.querySelector('#students_no').value,
        sName = document.querySelector('#students_name').value,
        score = document.querySelector('#score').value;

    createStdList() // 함수 실행
    if (sNo == '' || sName == '' || score == '') {
        return;
    }

    students[students.length] = {
        stdNo: sNo,
        stdName: sName,
        score: score
    } // students 객체에 삽입
    console.log(students)

    // 변수에 저장된 값 초기화
    document.querySelector('#students_no').value = '';
    document.querySelector('#students_name').value = '';
    document.querySelector('#score').value = '';
});

// 수정 이벤트
document.querySelector('.addBtn').
addEventListener('click', function () {
    // 목록에 있는 tr 전체 선택
    let nodelist = document.querySelectorAll('#list tbody tr');
    for (let i = 0; i < nodelist.length; i++) { // console.dir(nodelist[i]); // 안에 td가 4개 있음
        // 찾을 학생 번호, 변경할 점수
        let sNo = document.querySelector('#students_no').value,
            score = document.querySelector('#score').value,        
            innersNo = nodelist[i].children[0].innerHTML,
            innerscore = nodelist[i].children[2].innerHTML;

        if (innersNo == sNo) {
            innerscore = score;
        }
    }

});


// 배열값을 활용하여 학생 목록 출력
function createStdList() {
    let str = '';
    for (let i = 0; i < students.length; i++) {
        str += `<tr onclick='showInfo(event)'>
        <td>${students[i].stdNo}</td>
        <td>${students[i].stdName}</td>
        <td>${students[i].score}</td>
        <td><button onclick='removeRow(event)'>삭제</button></td>
        </tr>`;
    }
    document.querySelector('#list tbody').innerHTML = str;
} // createStdList() 종료

// 학생 정보를 삭제하는 함수
function removeRow(e) {
    console.dir(e.target.parentElement.parentElement.remove());
}

// 학생 정보를 입력화면에 출력
function showInfo(e) {
    console.dir(e.target.parentElement.children[0].innerHTML);
    document.querySelector('#students_no').value = e.target.parentElement.children[0].innerHTML
    document.querySelector('#students_name').value = e.target.parentElement.children[1].innerHTML
    document.querySelector('#score').value = e.target.parentElement.children[2].innerHTML
}