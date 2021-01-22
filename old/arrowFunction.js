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

let thisUser = {
  firstName: "Doyeon",
  sayHi() {
    let arrow = () => console.log(this.firstName); //여기 this는 arrow가 아니라 sayHi의 this
    arrow();
  }
}

thisUser.sayHi();

/** arrow function에는 this가 존재하지 않는다. 화살표 함수 본문에서 this에 접근하면, 외부에서 값을 가져온다. 이를 이용해서 객체의 메소드안에서 객체의 프로퍼티를 대상으로 loop를 거는데 사용할 수 있다. 아래 showList안의 arrow function을 function statement로 바꾸면 this가 별도로 존재하게 되므로 error가 발생한다. */

let group = {
  title: "1st",
  students: ["John","Jane","Andy","Paul"],
  showList() {
    this.students.forEach(
      student => console.log(this.title + ':' + student) //여기 this는 showList의 this와 동일
    );
  }
}

group.showList();