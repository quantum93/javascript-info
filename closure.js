const sayHiBye = (firstName, lastName) => {
  const getFullName = () => firstName + "" + lastName;
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
console.log(sayHiBye("John", "Silver"));

const makeCounter = () => {
  let count = 0;
  return () => count++; //함수 이름이 없어도 상관없다. 어디선가 호출할게 아니면...
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/** ’변수’는 특수 내부 객체인 환경 레코드의 프로퍼티일 뿐입니다. '변수를 가져오거나 변경’하는 것은 '환경 
 * 레코드의 프로퍼티를 가져오거나 변경’함을 의미합니다. 렉시컬 환경은 명세서에만 존재합니다. '렉시컬 환경’은
 * 명세서에서 자바스크립트가 어떻게 동작하는지 설명하는 데 쓰이는 ‘이론상의’ 객체입니다. 
 * 따라서 코드를 사용해 직접 렉시컬 환경을 얻거나 조작하는 것은 불가능합니다. 자바스크립트 엔진들은 명세서에 
 * 언급된 사항을 준수하면서 엔진 고유의 방법을 사용해 렉시컬 환경을 최적화합니다. 사용하지 않는 변수를 버려 
 * 메모리를 절약하거나 기타 내부 트릭을 써서 말이죠. */

 /** 다만 함수 선언문(function declaration)으로 선언한 함수는 일반 변수와는 달리 바로 초기화된다는 
  * 점에서 차이가 있습니다. 함수 선언문으로 선언한 함수는 렉시컬 환경이 만들어지는 즉시 사용할 수 있습니다. 
  * 변수는 let을 만나 선언이 될 때까지 사용할 수 없지만 말이죠. 선언되기 전에도 함수를 사용할 수 있는 것은 
  * 바로 이 때문입니다. */

  /** 가비지 켤랙션에 대하여 */

const f = () => {
  let value =Math.random();
  return () => console.log(value);
}

let g = f(); // g.[[Environment]]에 f() 호출 시 만들어지는 렉시컬 환경 정보가 저장됩니다.
let arr = [f, f, f];
console.log(arr);

// 렉시컬 환경 객체는 다른 객체와 마찬가지로 도달할 수 없을 때 메모리에서 삭제됩니다. 해당 렉시컬 환경 객체를 참조하는 중첩 함수가 하나라도 있으면 사라지지 않죠.

function debugF() {
  let value = Math.random();
  function debugG() {
    debugger;
  }
  return debugG;
}

let myG = debugF();
console.log(myG());