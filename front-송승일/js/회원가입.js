//

// 가입하기 버튼
document.querySelector("#buttons").addEventListener('click', function() {
	let userId = document.querySelector("#user-id");
	let userPw1 = document.querySelector("#user-pw1");
	let userPw2 = document.querySelector("#user-pw2");

	if (userId.value.length < 4 || userId.value.length > 15) {
		alert("ID는 4자 이상 15자 이하로 입력해 주세요");
	} else if (userPw1.value.length < 8) {
		alert("PW는 8자 이상 입력해 주세요");
		userPw1.value = "";
	} else if (userPw1.value != userPw2.value) {
		alert("PW가 맞지 않습니다.");
		userPw2.value = "";
	}
})


























//