function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}


let generator = generateSequence(); // 먼저 generator 함수로 객체를 만들어야 한다.

/* let one = generator.next(); // 객체에 대해 next method를 적용
let two = generator.next(); // 객체에 대해 next method를 적용
let three = generator.next(); // 객체에 대해 next method를 적용

console.log(JSON.stringify(one), JSON.stringify(two), JSON.stringify(three));  */

// generator는 iterable이므로 for...of로 처리가 가능
for(let value of generator) {
  console.log(value);
}

// generator가 iterable이므로 spread operator를 사용할 수도 있다. 결과는 배열로 주어진다.
let sequence = [0, ...generateSequence()];
console.log(sequence);

// loop를 수행하는 generator를 만든다.
function* generatorLoop(start, end) {
  for(let i = start; i <= end; i++) yield i;
}

// 위의 generator가 만들어낸 결과를 출력하기 위해서는 for..of문으로 각각의 값을 호출해야 한다. 
let iteration = generatorLoop(1,10);
for(let value of iteration) {
  console.log(value);
}


// 이터러블 대신 제너레이터 사용하기
let range = { from: 1, to: 5,

  [Symbol.iterator]: function*() { // *[Symbol.iterator]() { 로 축약 가능
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
  
};

console.log( [...range] ); // 1, 2, 3, 4, 5

// 두 개의 generator를 이용하기
function* sequenceTwo(start, end) {
  for(let i = start; i <= end; i++) yield i;
}

function* password() { 
  yield* sequenceTwo(48,57); //yield* 지시자는 실행을 다른 제너레이터에 위임한다(delegate)
  yield* sequenceTwo(65,90); // for (let i = 65; i <= 90; i++) yield i; 와 동등
  yield* sequenceTwo(97,122);
}

let str ='';
for(let code of password()) {
  str += String.fromCharCode(code);
}

console.log(str);

// 'yield’를 사용해 제너레이터 안·밖으로 정보 교환하기

function* gen() {
  let result = yield "2 + 2 = ?";
  console.log(result);
}

let result = gen();
let question = result.next().value; //값을 전달하려면 result.next(arg)를 호출한ㄷ. let result = 4의 결과를 들고 있다. 
result.next(4); //generator 밖에서 next(4)를 즉시 호출하지 않고 있다! 제너레이터가 기다려주므로 호출을 나중에 할 수 있다.

function* gen2() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1);
  let ask2 = yield "3 * 3 = ?";
  console.log(ask2);
}

let result2 = gen2(); //일단 여기서 generator를 객체로 만든다.
console.log(result2.next().value); // 2 + 2 = ? 가 첫번째 yield가 된다.
console.log(result2.next(4).value); // 첫 번째 yield의 결과인 4를 generator에 전달 그리고 다시 실행
console.log(result2.next(9).value); // 두번째 실행에서 3*3 = ?을 전달하지만 실행 결과인 9는 done:true가 되므로 출력되지 않음.

/** 모던 자바스크립트에서는 제너레이터를 잘 사용하지 않습니다. 그러나 제너레이터를 사용하면 실행 중에도 제너레이터 호출 코드와 데이터를 교환할 수 있기 때문에 유용한 경우가 종종 있습니다. 그리고 제너레이터를 사용하면 이터러블 객체를 쉽게 만들 수 있다는 장점도 있습니다.

다음 챕터에선 for await ... of 루프 안 비동기 데이터 스트림을 다룰 때 사용되는 비동기 제너레이터(asnyc generator)에 대해 알아볼 예정입니다. 비동기 제너레이터는 페이지네이션을 사용해 전송되는 비동기 데이터 스트림을 다룰 때 사용됩니다.

웹 프로그래밍에선 데이터 스트림을 다뤄야 하는 경우가 많은데, 제너레이터는 이 경우에 유용합니다. 

의사 난수 생성기가 필요할때 즉, 개발을 하다 보면 임의의 데이터가 필요한 경우가 자주 생깁니다. 테스팅을 진행할 때도 임의의 데이터가 필요할 수 있습니다. 정형화된 데이터가 아닌 랜덤한 텍스트나 숫자 등을 입력해 테스트를 진행하는 것이 좋기 때문입니다.

자바스크립트에서는 Math.random()을 사용해 난수를 만들 수 있습니다. 그런데 테스트 도중 문제가 생겨 테스트를 중단했다가 소스 코드를 고치고 다시 테스트를 재개할 때는 이전에 문제를 일으켰던 데이터와 동일한 데이터를 입력해 같은 문제가 발생하는지 살펴보아야 합니다.

이를 위해 '고정값 의사 난수 생성기’가 사용됩니다. 고정값 의사 난수 생성기는 첫 번째 값을 '고정값’으로 삼고, 생성기 안에 저장된 공식을 사용해 두 번째 값을 생성합니다. 고정값이 같으면 난수 생성기에서 차례대로 나오는 값들이 동일하므로 난수 생성 흐름을 쉽게 재현할 수 있습니다. 고정값만 기억해 두면 됩니다.

다소 균일하게 분포된 값을 생성하는 공식의 예는 다음과 같습니다.

function* pseudoRandom(seed) {
  let value = seed;

  while(true) {
    value = value * 16807 % 2147483647
    yield value;
  }

};

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

*/
