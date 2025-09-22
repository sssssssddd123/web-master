//  class.js

const obj = {
	name: "Hong",
	age: 20,
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}`
	}
}; // 객체(하나의 값)


// 클래스 (실사물의 전산적 표현 => 객체(클래스))
class Person {
	// 이름, 키, 몸무게, 혈액형
	constructor(name, height, weight, bloodtype) { // 생성자
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.bloodtype = bloodtype;
	}
	showInfo() {
		return `이름은 ${this.name}, 키는 ${this.height}`
	}
}

const p1 = new Person("Hong", 178.9, 72.3, "O"); // 인스턴스 생성
console.log(p1.name, p1.height, p1.weight, p1.bloodtype, p1.showInfo());

const p2 = new Person("Hwang", 180, 80, "A");
console.log(p2.showInfo());













// 