/** 자바스크립트에서 함수도 객체이다. 함수가 객체이므로 객체를 위한 기본 내장 property를 가지고 있으며
 * (name, length) 추가로 사용자가 정의한 property를 만들고 사용할 수 있다. 
 * 그러나 프로퍼티는 변수가 아닙니다. sayHi.counter = 0와 같이 함수에 프로퍼티를 할당해도 함수 내에 
 * 지역변수 counter가 만들어지지 않습니다. counter 프로퍼티와 변수 let counter는 전혀 관계가 없습니다. 
 * 프로퍼티를 저장하는 것처럼 함수를 객체처럼 다룰 수 있지만, 이는 실행에 아무 영향을 끼치지 않습니다. 
 * 변수는 함수 프로퍼티가 아니고 함수 프로퍼티는 변수가 아니기 때문입니다. 둘 사이에는 공통점이 없습니다.
 */

function sayHi() {
  console.log("Hi");
  sayHi.counter++;
}

sayHi.counter = 0; // 함수에 프로퍼티를 할당
sayHi();
sayHi();
console.log(`호출횟수: ${sayHi.counter}회`);

// 클로져로 함수 프로퍼티를 대체할 수 있다. 

function makeCounter() {
  // let count = 0;
  function counter() {
    return counter.count++;
  };
  counter.count = 0; // 함수에 프로퍼티를 할당
  return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());