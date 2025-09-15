// dom_test.js

let students = [{
    stdNo: '',
    stdName: '',
    score: ''
}, {
    stdNo: '',
    stdName: '',
    score: ''
}]

for (let prop in students) {
    console.log(prop)
}

// 값을 불러오고 변수에 저장하는 기능
document.querySelector('#addBtn').addEventListener('click',
    function () {
        const newElement = {
            sNo: document.querySelector('#students_no').value,
            sName: document.querySelector('#students_name').value,
            score: document.querySelector('#score').value
        }

        if (newElement.sNo == '' || 
            newElement.sName == '' || 
            newElement.score == '') {
            alert('올바른 값을 입력하세요.')
            return;
        }
        
        let tr = makeTr(newElement)

        document.querySelector('#list tbody').appendChild(tr);

        document.querySelector('#students_no').value = '';
        document.querySelector('#students_name').value = '';
        document.querySelector('#score').value = '';
    } // function
) // addEventListener

console.log(students.length)

function makeTr(newElement) { // tr, td, 삭제 버튼 생성
    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement('tr');

        for (let prop in newElement) {
            let td = document.createElement('td');
            td.innerHTML = newElement[prop];
            tr.appendChild(td);
        } // for in

        console.log(tr)

        let td = document.createElement('td');
        let btn = document.createElement('button');

        btn.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove();
        }) // function, addEventListener

        btn.innerHTML = '삭제';
        td.appendChild(btn);
        tr.appendChild(td);

        return tr;
    } // for
} // function


// makeTr()