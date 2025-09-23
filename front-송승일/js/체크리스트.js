//

let list = [];

let div = document.querySelector('#itemList');
let ul = document.createElement('ul');
let add = document.querySelector('#add'); // 추가 버튼

add.addEventListener('click', function() { // 리스트 추가
	let myList = document.querySelector('#item').value;
	let listChecked = false;

	list.forEach(item => { // 배열 속 중복 값 체크
		if (item == myList) {
			listChecked = true
		}
	});

	if (myList == "") { // 빈 값이면 에러 발생
		console.log("값을 입력해 주세요");
		return;
	} else if (listChecked) {
		console.log("중복되는 값이 있습니다.( " + myList + " )");
		return;
	} else {
		console.log(myList + " 추가");
		list.push(myList); // 중복 값 없을 시 배열 추가
	};

	let li = document.createElement('li');
	let span = document.createElement('span');

	li.innerHTML = myList; // input 목록 추가

	span.innerHTML = "X"; // span Text, class 지정
	span.className = "close";
	li.appendChild(span); 
	ul.appendChild(li);
	div.appendChild(ul); // <div><ul><li><span>
	console.log(list);

	document.querySelector('#item').focus(); // 입력 후 input 포커스
	document.querySelector('#item').value = ""; // input 초기화
	listDelete(span) // 삭제 기능 추가
});

function listDelete(span) { // 삭제 기능 추가
	span.addEventListener('click', function(e) {
		e.stopPropagation(); // 버블링 방지

		let li = e.target.parentElement;
		let value = li.firstChild.textContent;

		list = list.filter(item => item !== value); // 삭제하려는 값 제외하고 배열 재생성
		console.log(li.innerHTML + " 삭제")
		console.log(list);
		li.remove();
	});
}











// span.addEventListener('click', function(e) {
// 	e.stopPropagation();

// 	let li = e.target.parentElement;
// 	let value = li.firstChild.textContent;
// 	console.log(arr);
// 	arr = arr.filter(item => item !== value);
// 	console.log(arr);
// 	li.remove();
// });

// function listDelete(span) { // 삭제 기능 추가
// 	span.addEventListener('click', function() {
// 		this.parentElement.remove();
// 	})
// }






















// 