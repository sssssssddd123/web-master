// covid.js

const url =
	'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=9500f93f9ffed9d1bcd3baa31d8e915b398fa165aacb40406f8214ca660c8048';

let total = [];
fetch(url)
	.then((resp) => {
		return resp.json(); // json 포맷을 자바스크립트 객체로 변환 시켜줌
	})
	.then((result) => {
		total = result.data;
		showPageList(page = 1);
		pageLinkEvent(); // 페이지 목록 출력
	})
	.catch((err) => { console.log(err); })






// 건수에 따른 페이지 개수 => 1,  11, 12, 13, 14, 15, ... , 29
function makePagingList() {
	const paging = {
		currPage: 1,
		startPage: 1,
		endPage: 10,
    prev: false,
    next: false,
		initPage(page = 1, totalCnt = 284) {
			let realEnd = Math.ceil(totalCnt / 10);
			this.currPage = page;
			this.endPage = Math.ceil(page / 10) * 10;
			this.startPage = this.endPage - 9;
			this.prev = this.startPage == 1 ? false : true; // 이전 10개의 페이징 존재여부
			// this.next = this.endPage > realEnd ? realEnd : this.end;
      this.next = this.endPage < realEnd ? true : false; // 이후 10개 페이징 존재여부
		},
	};
	paging.initPage(7)


	// ul tag
	let target = document.querySelector("ul.pagination");
  target.innerHTML = "";

	// 이전 페이징 생성
	if (paging.prev) {
		let li = document.createElement('li');
		li.className = "page=item";
		let a = document.createElement('a');
		a.innerText = 'Previous';
		a.classList = 'page-link';
    a.setAttribute('href', '#')
		li.appendChild(a);
		target.appendChild(li);
	} else {
		let li = document.createElement('li');
		li.className = "page=item disabled";
    let a = document.createElement('a');
		a.innerText = 'Previous';
		a.classList = 'page-link';
		li.appendChild(a);
		target.appendChild(li);
	};

	// 페이징 생성
	for (let s = paging.startPage; s <= paging.endPage; s++) {
		let li = document.createElement('li');
		li.className = "page=item";
		let a = document.createElement('a');
		a.innerText = s;
		a.classList = "page-link";
		a.setAttribute('href', '#');
		li.appendChild(a)
		target.appendChild(li)
	}

  // 이후 페이징 생성
	if (paging.next) {
		let li = document.createElement('li');
		li.className = "page=item";
		let a = document.createElement('a');
		a.innerText = 'Next';
		a.classList = 'page-link';
    a.setAttribute('href', '#')
		li.appendChild(a);
		target.appendChild(li);
	} else {
		let li = document.createElement('li');
		li.className = "page=item disabled";
    let a = document.createElement('a');
		a.innerText = 'Next';
		a.classList = 'page-link';
		li.appendChild(a);
		target.appendChild(li);
	};

  // 링크 이벤트 생성
  pageLinkEvent()
}
makePagingList()


// 화면에 있는 a에게 링크 생성
function pageLinkEvent() {
	document.querySelectorAll('a.page-link').forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault(); // 기본기능 차단

			let page = item.innerText;
			showPageList(page);
		})
	})
}

// 페이지 목록 출력
function showPageList(page = 1) {
	document.querySelector('#centerList').innerHTML = ""; // 글 목록 초기화

	let start = (page - 1) * 10;
	let end = page * 10;
	total
		.filter((item) => item.id > start && item.id <= end)
		.forEach((center) => {
			let tr = makeRow(center); // 한 건씩 출력
			document.querySelector('#centerList').appendChild(tr);

		})
}

// 센터 -> 한 건 출력
function makeRow(center) {
	const fields = ['id', 'centerName', 'address', 'sido'];
	let tr = document.createElement('tr');

	for (let field of fields) {
		let td = document.createElement('td');
		td.innerHTML = center[field];
		tr.appendChild(td);
	}
	return tr;
}



















// 