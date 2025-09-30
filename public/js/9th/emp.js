// http://localhost:3000/emp -> json 데이터

fetch(`http://localhost:3000/emp`)
	.then(response =>
		response.json()
	).then(result => {
		// console.log(result);
		result.forEach(item => {
			let tr = makeRow(item);
			document.querySelector("#list").appendChild(tr);
		});
	}).catch((err) => {
		console.log("err");
	});
 
function makeRow(employee) {
	let fields = ["EMPNO", "ENAME", "JOB", "SAL", "DNAME"];
	let tr = document.createElement("tr");
	tr.setAttribute('data-eno', employee.EMPNO);
	fields.forEach(field => {
		let td = document.createElement("td");
		td.innerHTML = employee[field];
		td.setAttribute('class', 'list-box')

		tr.appendChild(td);
	})
	// 삭제 버튼
	let btn = document.createElement("button");
	btn.innerHTML = "삭제";
	btn.addEventListener('click', deleteFunc);
	btn.setAttribute('class', 'delete-btn')

	let td = document.createElement("td");
	td.appendChild(btn)
	tr.appendChild(td);
	return tr;
}

// 삭제 기능
function deleteFunc(e) {
	console.log(this.parentElement.parentElement.dataset.eno);
	let thisTr = this.parentElement.parentElement;
	let eno = this.parentElement.parentElement.dataset.eno;

	fetch(`http://localhost:3000/emp/` + eno)
		.then(response => {
			return response.json();
		}).then(result => {
			if (result.rowsAffected) {
				thisTr.remove();
				alert("성공")
			} else {
				alert("실패")
			}
		}).catch((err) => {
			console.log(err);
		});
}


// 이벤트.
document.forms[0].addEventListener('submit', function(e) {
	// 기본기능 차단
	e.preventDefault();
	let eno = document.querySelector('#empNo').value;
	let ename = document.querySelector('#empName').value;
	let job = document.querySelector('#jobTitle').value;
	let hd = document.querySelector('#hireDate').value;
	let deptno = document.querySelector('#deptNo').value;
	console.log(eno, ename, job, hd, deptno)

	// json 포맷으로 서버 전달
	fetch('http://localhost:3000/emp', {
			method: 'post',
			headers: { "Content-Type": "application/json;charset=UTF-8" },
			body: JSON.stringify({ eno, ename, job, hd, deptno })
		})
		.then(response => {
			response.json();
		}).then(result => {
			console.log(result)
		})
		.catch(err => {
			console.log(err)
		})
})

// 조건 검색
document.querySelector('div.btn-group > .search-btn')
	.addEventListener('click', function() {
		const ename = document.querySelector('#searchName').value || 'ALL';
		const job = document.querySelector('#searchJob').value || 'ALL';
		const deptno = document.querySelector('#searchDept').value || '-1';

		let url =
			`http://localhost:3000/emp/${ename}/${job}/${deptno}`;
		fetch(url)
			.then((response) => response.json())
			.then((result) => {
				// console.log(result);
				document.querySelector("#list").innerHTML = ""; // 목록 리스트 초기화
				result.forEach(item => {
					let tr = makeRow(item);
					document.querySelector("#list").appendChild(tr);
				});
			})
			.catch((err) => {
				console.log(err);
			})
	})

















// 