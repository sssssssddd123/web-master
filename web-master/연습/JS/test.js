// 🔑 발급받은 서비스 키 (URL 인코딩)
const SERVICE_KEY = encodeURIComponent("9500f93f9ffed9d1bcd3baa31d8e915b398fa165aacb40406f8214ca660c8048");

// 위치 정보 (서울 종로구, 부산 해운대구 예시)
const locations = [
	{ name: "대구", nx: 89, ny: 90, elementId: "weather1" },
	{ name: "해운대구", nx: 98, ny: 76, elementId: "weather2" }
];

// 오늘 날짜 YYYYMMDD
function getToday() {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${year}${month}${day}`;
}

// 날씨 불러오기
async function getWeather(location) {
	const base_date = getToday();
	const base_time = "0600"; // 발표시간 (02,05,08,11,14,17,20,23 중 선택)
	const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
?serviceKey=${SERVICE_KEY}&numOfRows=100&pageNo=1&dataType=JSON
&base_date=${base_date}&base_time=${base_time}&nx=${location.nx}&ny=${location.ny}`;

	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error("API 요청 실패");

		const text = await res.text();
		let data;
		try {
			data = JSON.parse(text);
		} catch (e) {
			console.error("JSON 파싱 실패, 서버 응답:", text);
			document.getElementById(location.elementId).innerHTML = "날씨 정보를 불러올 수 없음";
			return;
		}

		const items = data.response.body.items.item;

		// 기온(T1H)과 강수형태(PTY) 가져오기
		const temp = items.find(i => i.category === "T1H");
		const rain = items.find(i => i.category === "PTY");

		let rainText = "없음";
		if (rain && rain.obsrValue !== "0") {
			const type = { "1": "비", "2": "비/눈", "3": "눈", "4": "소나기" };
			rainText = type[rain.obsrValue] || rain.obsrValue;
		}

		document.getElementById(location.elementId).innerHTML =
			`📍 ${location.name}<br>🌡️ ${temp ? temp.obsrValue+"°C" : "-"}<br>☔ ${rainText}`;
	} catch (error) {
		console.error(error);
		document.getElementById(location.elementId).innerHTML = "날씨 정보를 불러올 수 없음";
	}
}

// 실행
locations.forEach(loc => getWeather(loc));