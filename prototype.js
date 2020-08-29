/** prototype inheritance의 예 */
let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal; // animal 객체의 프로퍼티를 rabbit객체에 상속해 준다. 
console.log(rabbit.eats, rabbit.jumps); // rabbit에 없는 eats프로퍼티는 상속으로 가져온다. 
// 이제 “rabbit의 프로토타입은 animal이다.” 혹은 "rabbit은 animal을 상속받는다."라고 말 할 수 있다.


/** 프로토타입을 설정해 준 덕분에 rabbit에서도 animal에 구현된 유용한 프로퍼티와 메서드를 사용할 수 있게된다. 이렇게 프로토타입에서 상속받은 프로퍼티를 '상속 프로퍼티(inherited property)'라고 한다. 상속 프로퍼티를 사용해 animal에 정의된 메서드를 rabbit에서 호출하면 ... */
let animal2 = {
  eats:true,
  walk() { console.log("animal is walking."); }
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2
};

let longEar = {
  earLength: 10,
  __proto__: rabbit2
};

rabbit2.walk(); //animal에서 자동으로 walk를 상속받았다.
longEar.walk(); // rabbit에서 상속, rabbit은 animal에서 상속, 즉 chaining으로 작동
console.log(longEar.jumps);

/* 프로토타입 체이닝엔 두 가지 제약사항 1. 순환 참조(circular reference)는 허용되지 않는다.
2. __proto__의 값은 객체나 null만 가능, 다른 자료형은 무시된다. 추가로, 객체엔 오직 하나의 
[[Portotype]]만 있을 수 있다는 당연한 제약도 있습니다. 객체는 두 개의 객체를 상속받지 못합니다. 
(이건 자바스크립트에서만 그렇다.) */

rabbit2.walk = function () {
  console.log("토끼가 깡충깡충 뜁니다.");
}

rabbit2.walk() // 이제 더이상 상속의 walk가 아니라 직접 지정한 walk() method를 사용한다. 


