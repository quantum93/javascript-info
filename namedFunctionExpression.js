let sayHi = function(who) {
  return (who) ? console.log(`Hello, ${who}`): sayHi("Guest");
}

console.log(sayHi("Tae"));

/* 하지만 위와 같이 코드를 작성하면 외부 코드에 의해 sayHi가 변경될 수 있다는 문제가 생깁니다. 
함수 표현식을 새로운 변수에 할당하고, 기존 변수에 null을 할당하면 에러가 발생하죠. 아래의 경우처럼 ...*/

let welcome = sayHi;
sayHi = null;
console.log(welcome()); //TypeError:sayHi is not a function가 발생, 왜냐하면 sayHi는 null 이므로

