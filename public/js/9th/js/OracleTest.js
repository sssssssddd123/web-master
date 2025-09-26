// http://localhost:3000/emp -> json 데이터

fetch(`http://localhost:3000/emp`)
	.then(response =>
		response.json()
	).then(result => {
		console.log(result);
		result.forEach(item => {
			let tr = makeRow(item);
			document.querySelector("#list").appendChild(tr);
		});
	}).catch((err) => {
		console.log("err");
	});

function makeRow(employee) {
	let fields = ["EMPNO", "ENAME", "JOB", "SAL"];
	let tr = document.createElement("tr");
	tr.setAttribute('data-eno', employee.EMPNO);
	fields.forEach(field => {
		let td = document.createElement("td");
		td.innerHTML = employee[field];

		tr.appendChild(td);
	})
	// 삭제 버튼
	let btn = document.createElement("button");
	btn.innerHTML = "삭제";
	btn.addEventListener('click', deleteFunc);

	let td = document.createElement("td");
	td.appendChild(btn)
	tr.appendChild(td);
	return tr;
}

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

























// 