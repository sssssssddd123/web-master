// object.js

// createElement() // 요소 생성
// appendChild() / 부모 - 자식 연결
// innerText, innerHTML, innerContent

let students = [{
    stdNo: 1,
    stdName: '일',
    score: 80
}, {
    stdNo: 2,
    stdName: '이',
    score: 83
}];

// for (let prop in students[0]) {
//     console.log(prop, students[0][prop]);
// }

document.querySelector('#addBtn').addEventListener('click',
    function () { // 값 등록
        const newElement = { // 매개변수 생성
            sNo: document.querySelector('#students_no').value,
            sName: document.querySelector('#students_name').value,
            score: document.querySelector('#score').value
        }

        let tr = makeTr(newElement);
        document.querySelector('#list tbody').appendChild(tr);

        document.querySelector('#students_no').value = '';
        document.querySelector('#students_name').value = '';
        document.querySelector('#score').value = '';
    }
)

function createStdList() { // 리스트 불러오기
    for (let i = 0; i < students.length; i++) {
        let tr = makeTr(students[i]);

        document.querySelector('#list tbody').appendChild(tr);
    }
}

function makeTr(newElement) {
    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement('tr'); // <tr></tr>이 만들어짐

        for (let prop in newElement) { // 속성 반복
            let td = document.createElement('td'); // <td></td>가 만들어짐
            td.innerHTML = newElement[prop];
            tr.appendChild(td);
        }

        // 삭제버튼
        let td = document.createElement('td');
        let btn = document.createElement('button');

        // btn에 이벤트 생성
        btn.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove();
        });

        btn.setAttribute('class', 'btn btn-danger')
        btn.innerHTML = '삭제';
        td.appendChild(btn);
        tr.appendChild(td);

        return tr;
    }
}


createStdList();