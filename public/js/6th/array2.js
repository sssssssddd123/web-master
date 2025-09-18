// array2.js

const xhtp = new XMLHttpRequest();

xhtp.open('get', "../5th/data.json");
xhtp.send();


// filter, map => 여자사원의 사번, 이름(성+이름), 급여 출력
xhtp.onload = function() {
  const data = JSON.parse(xhtp.responseText);
  console.log(data)

  data.map(item => {
    let {first_name, last_name, salary} = item;
    let isFemale = item.gender == "Female" ? "Female" : "Male";
    return {first_name, last_name, isFemale, salary};
  })
  .filter(item => item.isFemale == "Female")
  .forEach(item => {
    console.log(
      `이름: ${item.first_name + item.last_name}, 성별: ${item.isFemale}, 급여: ${item.salary}`)
  })
}