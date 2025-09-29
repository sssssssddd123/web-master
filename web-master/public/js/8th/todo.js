// 


// newElement()


// function newElement() {
// 	let txt = document.querySelector('#myInput').value;
// 	if (txt == "") return;

// 	let clonde = document.querySelector('#myUL>li').cloneNode(true);
// 	let spand = clonde.querySelector('span');

// 	clonde.innerHTML = txt;
// 	clonde.appendChild(spand);
// 	console.log(clonde);
// 	console.log(spand);

// 	document.querySelector('#myUL').appendChild(clonde);
// }






// Add 버튼
document.querySelector('.addBtn').addEventListener('click', function() {
	let myInput = document.querySelector('#myInput').value;

	if (myInput == "") return;
	let span = document.createElement('span');
	let li = document.createElement('li');
	let ul = document.querySelector('#myUL');

	span.innerHTML = "X";
	span.className = "close";
	li.innerHTML = myInput;
	li.appendChild(span)
	ul.appendChild(li)

	document.querySelector('#myInput').value = "";

	liDelete(span);
	liChecked(li);
});



/////////////////////////
// 새로 만들어진 목록에 event 추가
function liDelete(span) {
	span.addEventListener('click', function() {
		this.parentElement.remove();
	})
}

function liChecked(li) {
	li.addEventListener('click', function() {
		this.classList.toggle('checked')
	})
}


/////////////////////////
// 기존에 있는 목록에 event 추가
function liDelete2() {
	document.querySelectorAll("span.close").forEach((item) => {
		item.addEventListener('click', function() {
			this.parentElement.remove();
		})
	})
}
liDelete2();

function liChecked2() {
	document.querySelectorAll("ul li").forEach((item) => {
		item.addEventListener('click', function() {
			this.classList.toggle('checked')
		})
	})
}
liChecked2()