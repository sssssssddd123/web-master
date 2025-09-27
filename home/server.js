const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); // 절대경로
app.use(express.json()); // req.body할 때 필요
app.use(express.urlencoded({ extended: true })); //req.body할 때 필요
app.set('view engine', 'ejs'); // ejs 확장자를 사용하겠다 선언

const { MongoClient, ObjectId } = require('mongodb') // mongodb라는 객체에서 MongoClient라는 속성만 가져와서 변수에 담겠다는 의미
let db // 전역변수로 사용하기 위해 함수 밖에 미리 선언
const url = 'mongodb+srv://islbvv_db_user:songsil12!@seung.fsdrwjp.mongodb.net/?retryWrites=true&w=majority&appName=seung'

new MongoClient(url)
	.connect()
	.then((client) => { // async await로 대체 가능
		console.log("MongoClient(url) DB연결성공");
		console.log("---------------------------");
		db = client.db("forum") // Mongo Collcetions 속 "forum"라는  Database를 가져옴
		app.listen(8080, () => { // 내 서버를 8080라는 포트(입구)에서 실행한다는 뜻
			console.log("서버 8080 포트 구동 완료");
			console.log("---------------------------");
		});
	}).catch((err) => {
		console.log("에러 발생");
		console.log(err);
		console.log("---------------------------");
	});

app.get("/", (req, res) => { // 첫 페이지
	res.sendFile(__dirname + '/index.html');
});

app.get("/about", (req, res) => { // 그냥 의미없는 test
	res.sendFile(__dirname + '/intro.html');
});

app.get("/list", async (req, res) => { // 글 목록 출력
	let result = await db.collection('post').find().toArray()
	// 1. db.collection('post'): db 속의 post라는 컬렉션을 선택 
	// 2. find(): post 속의 데이터를 찾음 
	//            괄호 속에 아무 값이 없으면 모든 데이터를 찾음
	//            반환된 값은 커서(Cursor)이라 불리는 객체로 반환됨 
	// 3. toArray(): 반환된 커서(Cursor)를 배열(Array)으로 변환시켜줌
	res.render('list.ejs', { posts: result });
});

app.get("/write", (req, res) => { // 글쓰기 페이지 출력
	res.render('write.ejs');
});

app.post("/add", async (req, res) => { // 버튼 누르면 body에 있는 form 데이터를 가져옴
	console.log("ㄱㄷ 저장해 줌");
	try {
		if (req.body.title == "" || req.body.content == "") { // 빈 값 감지
			console.log("내용 입력 안 하냐?");
			console.log(req.body);
			console.log("---------------------------");
			res.redirect("/write"); // 새로고침
		} else {
			await db.collection("post").insertOne({ // body 속 form 데이터 저장
				title: req.body.title,
				content: req.body.content
			});
			console.log("저장 완료");
			console.log("---------------------------");
			res.redirect('/list'); // list로 이동
		}
	} catch (err) { // 에러 감지
		console.log(err);
		res.status(500).send("서버 에러남");
	}
});

app.get("/detail/:id", async (req, res) => {
	try {
		let result = await db.collection("post")
			.findOne({ _id: new ObjectId(req.params.id) });
		// 1. db.collection("post") 위와 같음
		// 2. findOne({ _id: new ObjectId(req.params.aaa) })
		//		-> db 속에 _id가 같은 값 하나만 가져옴
		if (result == null) {
			res.status(400).send("이상한 rul 입력했어영");
		} else {
			res.render("detail.ejs", { post: result });
		};
	} catch (err) {
		console.log(err);
		res.status(400).send("이상한 rul 입력했어영");
	};
});