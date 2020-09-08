/** 복잡한 자료구조에는 다음 네가지가 존재한다. 
 * 1. object = collection with literal key type only
 * 2. array = collection with order
 * 3. map = collection with various key type // map method와는 다른 것이다.
 * 4. set = collection without key and duplication
 * 
 * myMap을 사용할 땐 map전용 메서드 set, get 등을 사용해야만 합니다. myMap[key] = 2로 사용하면 
 * myMap은 더이상 map 자료구조가 아니라 일반 객체로 취급이 된다. 
 */

let myMap = new Map();

myMap.set('1', 'strOne');
myMap.set(1, 'number One');
myMap.set(true, 'booleanOne');

console.log(myMap.get(1), myMap.get('1'), myMap.size);

/* map 자료구조는 심지어 객체를 key로 사용하는 것도 가능하다. 
객체를 키로 사용할 수 있다는 점은 맵의 가장 중요한 기능 중 하나입니다. */
let john = {name: "John"};
let visitsCountMap = new Map();
visitsCountMap.set(john, 123); // john객체를 key로 123이라는 값(value)를 지정
console.log(visitsCountMap.get(john)); // john 객체가 key인 map에서 값을 호출

let ann = {name: "Ann"};
let visitsCountObj = {}; // 빈 객체를 만든다.
visitsCountObj[ann] = 456; // 객체 ann을 key로 값 456를 저장
console.log(visitsCountObj["[object Object]"]); // visitsCountObj가 map이 아니고 일반 객체 이므로 모든 키를 문자형으로 변환시킵니다. 원하는 456을 출력하려면 key자리에 object Object를 써야 한다. 