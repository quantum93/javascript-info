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

//chaining of map data structure
let chainMap = new Map();
chainMap.set("2", "string Two").set(2, "number Two").set(true, 'boolean Two');
console.log(chainMap.get('2'));

// looping with map data structure
let recipeMap = new Map([ ['cucumber', 500], ['tomatoes', 350], ['onion',    50] ]);
for (let vegitable of recipeMap.keys()) { console.log(vegitable); }
for (let amount of recipeMap.values()) { console.log(amount); }
for (let entry of recipeMap.entries()) { console.log(entry); }
recipeMap.forEach((key,value) => { console.log(`${key}: ${value}`); });

/* 평범한 객체를 map 데이터 구조로 바꾸는 방법:평범한 객체를 가지고 맵을 만들고 싶다면 내장 메서드 
Object.entries(obj)를 활용해야 합니다. 이 메서드는 객체의 키-값 쌍을 요소([key, value])로 
가지는 배열을 반환합니다. */
let simpleObj = { name: "Mary", age: 21 };
let simpleMap = new Map(Object.entries(simpleObj));
console.log(simpleMap.get('name'));

/* 반대로 map 데이터 구조를 일반 객체로 변환하는 방법은 Object.fromEntries()를 사용한다. 
이 방법은 key:value pair의 배열을 객체구조로 전환해 준다.  */
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4],
  [1, 5], //여기 숫자 1은 객체로 전환되면서 자동으로 문자 "1"로 변환된다.
]);

console.log(prices.orange, prices['1']); //prices.1이나 prices."1"은 동작하지 않는다. 


let mySet = new Set();

let setJohn = {name: "John"};
let setPete = {name: "Pete"};
let setMary = {name: "Mary"};

mySet.add(setJohn);
mySet.add(setPete);
mySet.add(setMary);

console.log(mySet.size)
for (let user of mySet) { console.log(user.name); }
mySet.forEach((value) => {console.log(value)});

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

/* 애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.
애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보자. 아래 주어진 배열의 원소들인 각 단어들이 
애너그램인 경우를 판별해서 그럴 경우 그 원소만 출력한다. */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for(let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join();
    console.log(sorted);
    map.set(sorted, word) // sorted는 key word는 value로 저장!
    console.log(map.keys());
  }
  return Array.from(map.values());
}

console.log(aclean(arr));

let map5 = new Map();
map5.set("name", "John");
console.log(map5);
let keys = Array.from(map5.keys());
console.log(keys);
keys.push("more");
console.log(keys);