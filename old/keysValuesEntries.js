/** Map, Set, Array등의 자료구조에는 keys(), values(), entries()등의 메서드를 사용할 수 있다.
 * 객체가 위의 세가지가 아니고 일반객체(프로그래머가 만든 객체)일때는 사용문법이 약간 다르다.
 * Object.keys(obj)
 * Object.values(obj)
 * Object.entries(obj)
 * 로 문법이 정해져 있다. 즉 obj.keys()가 아니고 Object.keys(obj)로 사용해야 한다. 
 * 이렇게 문법에 차이가 있는 이유는 유연성 때문이다. 자바스크립트에선 복잡한 자료구조 전체가 객체에 기반하고
 * 그러다 보니 객체 data에 자체적으로 메서드 data.values()를 구현해 사용하는 경우가 있을 수 있다. 
 * 이렇게 커스텀 메서드를 구현한 상태라도 Object.values(data)같이 다른 형태로 메서드를 호출할 수 있으면 
 * 커스텀 메서드와 내장 메서드 둘 다를 사용할 수 있습니다.
 * 
 * 두 번째 차이는 메서드 Object.*를 호출하면 iterable 객체가 아닌 배열을 반환한다. 
 * ‘진짜’ 배열을 반환하는 이유는 하위 호환성 때문.
 */

 let user = {
   name: "John",
   age: 30
 };

 for(let value of Object.values(user)) { // Object.values(user)가 배열을 반환하므로 작동한다.
   console.log(value);
 }

 // 사용자가 만든 객체에 map이나 filter등의 메서드를 이용하는 방법은 바로 이런 문법을 통해 객체를 배열로 
 // 전환하고 이 결과에 대해서 메서드를 적용하면 된다.
 let prices = {
   banana: 1,
   orange: 2,
   meat: 4,
 }

 let doublePrices = Object.fromEntries( //Object객체에 fromEntries메서드가 loop를 대신해준다.
   Object.entries(prices).map(([key, value]) => [key, value*2]) //배열변환으로 map()사용가능
 );

 console.log(doublePrices, doublePrices.meat); // Object.fromEntries자체는 다시 객체다. 
 console.log(Object.entries(prices));

 const count = (obj) => Object.keys(obj).length;
 console.log(count(user));


 let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  return Object.values(salaries).reduce((a,b) => a + b);
/*   let sum = 0;
  for(let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum; */
}

console.log(sumSalaries(salaries));