let user = {
  name: "John",
  age: 30,
  sayHi() {console.log("안녕하세요!")},
}

user.sayHi(); // 안녕하세요!

// 외부의 독립적인 함수를 객체의 메소드로 끌어오는 방법
function sayHi() { console.log("누군지 모르지만 ...안녕하세요!"); };

let emptyUser = { };
emptyUser.sayHi = sayHi; //<-- sayHi()면 함수의 결과를 의미하므로 user.sayHi가 함수가 아니게 된다.
emptyUser.sayHi(); // 안녕하세요!