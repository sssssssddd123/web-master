// storage.js


// 객체: students
// sno: 100, sname: "홍길동", score: 80
// sno: 200, sname: "박철수", score: 85
// sno: 300, sname: "김민우", score: 76

let students = [
	{ sno: 100, sname: "홍길동", score: 80 },
	{ sno: 200, sname: "박철수", score: 85 },
	{ sno: 300, sname: "김민우", score: 76 }
];

// localStorage.setItem("students", JSON.stringify(students))

function loadData() {
	document.querySelector('.data-container').innerHTML = ''; // 기존값을 지우고 새로 기록하기 위해 초기화 시킴

	let data = JSON.parse(localStorage.getItem('students'))
	console.log(data)

	data.forEach(item => {
		let div = document.createElement('div');

		for (let prop in item) {
			let span = document.createElement('span');
			span.innerHTML = item[prop];
			span.setAttribute("class", "data-" + prop);
			div.appendChild(span)
		}

		// 목록 수정
		let btn = document.createElement("button");
		btn.innerHTML = '수정';
		btn.addEventListener('click', function(e) {
			// search : sno, 저장
			localStorage.setItem('search', item.sno);
			location.href = "updata.html"
		});
		div.appendChild(btn);

		document.querySelector('.data-container').appendChild(div);
	});
}
loadData()



// 저장
document.querySelector("form").addEventListener("submit",
	function(e) {
		e.preventDefault();
		let data = JSON.parse(localStorage.getItem("students"))
		let num0 = document.getElementById('sno').value;
		let result = data.filter((item) => item.sno == num0);

		if (result != '') {
			alert("중복된 학생번호가 있습니다.");
			return;
		} else {
			let sno = document.getElementById("sno").value;
			let sname = document.getElementById("sname").value;
			let score = document.getElementById("score").value;

			if (sno == '' || sname == '' || score == '') {
				alert('값을 입력하세요.')
				return;
			}

			if (!confirm("저장하시겠습니까?")) {
				alert('취소하셨습니다.')
				return;
			}

			let data = JSON.parse(localStorage.getItem("students"));

			data.push({
				sno,
				sname,
				score
			});

			localStorage.setItem("students", JSON.stringify(data));

			loadData()
		};
	})