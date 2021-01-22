let sayHi = function(who) {
  return (who) ? console.log(`Hello, ${who}`): sayHi("Guest");
}

console.log(sayHi("Tae"));

/* 하지만 위와 같이 코드를 작성하면 외부 코드에 의해 sayHi가 변경될 수 있다는 문제가 생깁니다. 
함수 표현식을 새로운 변수에 할당하고, 기존 변수에 null을 할당하면 에러가 발생하죠. 아래의 경우처럼 ...*/

let welcome = sayHi;
//sayHi = null;
console.log(welcome()); //TypeError:sayHi is not a function가 발생, 왜냐하면 sayHi는 null 이므로

let sayHi2 = function func(who) {
  return (who) ? console.log(`Hello, ${who}`): func("Guest");
}

let welcome2 = sayHi2;
sayHi2 = null;
console.log(welcome2()); // 외부변수를 변경해도 func로 정의된 내부함수는 항상 동일하게 호출가능하다.

const makeCounter = () => {
  let count = 0;
  const counter = () => count++;
  /* counter.set = value => count = value;
  counter.decrease = () => count--; */
  return counter;
}

let counter = makeCounter();
console.log(counter(), counter(), counter(), counter());

/* 임의의 수만큼 있는 괄호를 이용해 합계 구하기
sum은 함수를 반환해야만 이 모든 것이 의도한 대로 동작합니다.
sum이 반환하는 함수는 호출될 때마다 현재 값을 메모리에 저장하고 있어야 합니다.
 함수는 == 를 만났을 때 숫자가 되어야 합니다. 함수는 객체이므로 객체를 원시형으로 변환하기 챕터에서 설명한 것처럼, 객체-원시형으로의 형 변환이 일어날 텐데, 이때 메서드를 직접 구현해 원하는 대로 객체-원시형으로의 형 변환이 일어나게 할 수 있습니다. */

function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f; // return f()가 아니다!
  }
  f.toString = function() {
    return currentSum;
  }
  return f; // return f()가 아니다!
}