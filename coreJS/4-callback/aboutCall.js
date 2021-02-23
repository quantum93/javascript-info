/* https://www.javascripttutorial.net/javascript-call/ 
자바스크립트에서 function은 Function 객체의 instance이다. 

function show() {
  console.log('show function');
}

show();

이 과정은 사실 다음과 같은 call() 메소드를 이용해서 show라는 function object(인스턴스)를 
호출하는 과정이다.

show.call();

*/

// The call() method calls a function functionName with a given this value and arguments.

function show() {
  console.log(this);
}

show();

// 여기서 this는 전역객체를 가리키고 엄격모드에서는 undefined를 반환한다. 

function add(a,b) { return a + b; };
let result = add.call(this, 10, 20); // 사실 let result = add(10,20)과 동일
console.log(result);

var greeting = 'Hi';
var messenger = { greeting: 'Hello' }
function say(name) { console.log(this.greeting + ' ' + name)};

// say함수를 호출하는 방법은 

say('John'); // 아예 this에 대한 정보가 없다
say.call(this,'John'); // 여기 this는 전역객체를 가리킨다. 따라서 엄격모드에서 undefined
say.call(messenger, 'John'); // 비로소 messenger라는 객체를 say함수에 전달.

// Using the JavaScript call() method to chain constructors for an object

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width); // this는 Widget 객체를 가리키고 기존 Box 객체를 재사용
  this.color = color;
}

let widget = new Widget('red', 100, 200); // 생성자(클래스)를 이용, 새로운 객체(인스턴스)를 작성
console.log(widget);

// Using the JavaScript call() method for function borrowing

const car = {
  name: 'car',
  start: function () { console.log('Start the ' + this.name); },
  speedup: function () { console.log('Speed up the ' + this.name); },
  stop: function () { console.log('Stop the ' + this.name); },
};

const aircraft = {
  name: 'aircraft',
  fly: function () { console.log('Fly'); }
};

// aircraft 객체가 fly 메소드를 가지고 있다. 다음의 방법으로 aircraft 객체에서 car 객체의 start() 메소들 호출

car.start.call(aircraft); // car의 start 메소드를 aircraft객체를 위해 호출. 이를 함수 빌리기라고 한다. 

/* 
아래의 예제는 함수의 arguments가 array가 아니지만 함수의 처리결과를 array로 주게 된다. 이때 입력된 arguments를
array의 메소드를 이용해서 처리하려고 할때 call()을 사용해서 해당 객체(즉 함수의 arguments)를 slice() method에
적용할 수 있도록 해준다.
*/

function getOddNumbers() {
  const args = Array.prototype.slice.call(arguments); 
  return args.filter(num => num%2);
}

let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(oddNumbers);

/*
getOddNumbers(10,1,3,4,8,9)에서 인자 10,1,3,4,8,9는 엄밀히 배열이 아니다. 하지만 배열의 메소드인 slice()가
필요할때 call()을 이용 해당 함수의 인자인 10,1,3,4,8,9에 slice 메소드를 전달해 준다. 좋은 점이 입력이 배열이 아니지
만 결과를 배열의 형태로 한번에 처리할 수 있다. 
*/



