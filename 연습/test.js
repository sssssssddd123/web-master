// 🔑 발급받은 기상청 서비스키 (URL 인코딩된 키 사용)
const SERVICE_KEY = encodeURIComponent("9500f93f9ffed9d1bcd3baa31d8e915b398fa165aacb40406f8214ca660c8048"); 

// 두 지역 좌표 (집, 회사 등 원하는 위치로 수정 가능)
// 서울 종로구 (예시)
const location1 = { name: "종로구", nx: 60, ny: 127 };
// 부산 해운대구 (예시)
const location2 = { name: "해운대구", nx: 98, ny: 76 };

// 오늘 날짜 yyyymmdd
function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

// 날씨 불러오기
async function getWeather(location, elementId) {
  const base_date = getToday();
  const base_time = "0500"; // 발표시간 (02, 05, 08, 11, 14, 17, 20, 23 중 선택)
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst
?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&dataType=JSON
&base_date=${base_date}&base_time=${base_time}&nx=${location.nx}&ny=${location.ny}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const items = data.response.body.items.item;

    const temp = items.find(i => i.category === "T1H"); // 기온
    const rain = items.find(i => i.category === "POP"); // 강수확률

    document.getElementById(elementId).innerHTML =
      `📍 ${location.name}<br>🌡️ ${temp.fcstValue}°C<br>☔ ${rain.fcstValue}%`;
  } catch (error) {
    document.getElementById(elementId).innerHTML = "날씨 정보를 불러올 수 없음";
    console.error(error);
  }
}

// 실행
getWeather(location1, "weather1");
getWeather(location2, "weather2");