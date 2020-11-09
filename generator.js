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
