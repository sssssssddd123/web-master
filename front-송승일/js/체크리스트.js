//

let list = [];

let div = document.querySelector('#itemList');
let ul = document.createElement('ul');

document.querySelector('#add').addEventListener('click', function() { // 리스트 추가

	let myList = document.querySelector('#item').value;
	let li = document.createElement('li');

	if (myList == "") { // 빈 값이면 에러 발 생
		alert("값을 입력해 주세요");
		return;
	}

	li.innerHTML = myList;
	list.push(myList)

	let span = document.createElement('span');
	list.forEach(function() {

		span.innerHTML = "X";
		span.className = "close";
	})

	li.appendChild(span)
	ul.appendChild(li)
	div.appendChild(ul)
  document.querySelector('#item').focus(); // 입력 후 input 포커스
	document.querySelector('#item').value = ""; // input 초기화
	listDelete(span) // 삭제 기능 추가
})

function listDelete(span) { // 삭제 기능 추가
	span.addEventListener('click', function() {
		this.parentElement.remove();
	})
}























// 