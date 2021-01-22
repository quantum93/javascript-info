/** ...titles는 자동으로 인수의 나머지 부분에 배열로 할당이된다.
 * 중요한 점은 ...titles뒤에는 다른 인수가 오면 에러가 발생한다. 
 * (firstName, ...titles, lastName)은 에러가 발생.
 */
const showName = (firstName, lastName, ...titles) => {
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles);
}

console.log(showName("Julius", "Caesar", "Consul", "Imperator"));

const sumAll = (...args) => {
  let sum = 0;
  for(let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(1,2,3,));

/** rest parameter는 목록을 배열로 가져오게 한다. 반대로 spread operator는 배열을 parameter로 
 * 돌려주는 역할을 한다. 
 */

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

console.log(merged);

let str = "Hello";
/* 아래 둘다 문자열을 배열로 바꿔준다. 그런데 Array.from(obj)와 [...obj]에는 다음과 같은 미묘한 차이가 있습니다. Array.from은 유사 배열 객체와 이터러블 객체 둘 다에 사용할 수 있습니다. 전개 문법은 이터러블 객체에만 사용할 수 있습니다. 이런 이유때문에 무언가를 배열로 바꿀 때는 전개 문법보다 Array.from이 보편적으로 사용됩니다. */
console.log([...str]);
console.log(Array.from(str));

