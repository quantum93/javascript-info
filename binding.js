/** 객체에 존재하는 함수(메소드)를 외부로 전달할때 this 정보가 사라지는 문제가 있다.
 * 즉 객체의 함수를 외부에서 이용하면 객체가 내장하고 있는 this는 가져오지 않는다. 
 * 아래의 예를 통해서 시현할 수 있다.
  */
 let user = {
   firstName: "John",
   sayHi() {
     console.log(`Hello, ${this.firstName}!`);
   }
 }

setTimeout(user.sayHi, 1000); // Hello, undefined!

/* this.firstName이 John이 되어야하는데 undefined가 출력된다. 이유는 setTimeout에 객체에서 분리된 
sayHi() 메소드만이 전달되기 때문이다. 메소드를 전달할때 객체의 context를 같이 전달하려면 다음의 방법들을 
이용할 수 있다.  */

// 가장 쉬운 방법은 wrapper를 이용하는 것이다. 외부 렉시컬 환경에서 user를 받아서 메서드를 호출했기 때문입니다. 

setTimeout(() => user.sayHi(), 1000);

//그러나 아래의 경우처럼 1초가 지나기전에 user의 정보가 변경되면 변경된 내용이 출력된다.

//user = {sayHi() {console.log("또 다른 사용자");}};

// bind를 이용하면 이런 문제를 해결할 수 있다. 모든 this에는 수정을 할 수 있는 bind가 내장 메소드로 제공
let sayHi = user.sayHi.bind(user);
console.log(sayHi())
setTimeout(sayHi, 1000);

let user2 = {
  firstName:"Tae",
  say(phrase) { console.log(`${phrase}, ${this.firstName}!`); }
}

let say = user2.say.bind(user2);
say("Hello");
say("Bye");
