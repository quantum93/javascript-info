let john = {name: "John"};
john = null; // null로 덮어쓰면 john객체는 접근이 불가능해져서 메모리에서 삭제된다. 

/* 그런데 접근이 불가능한 요소로 구성된 객체라도 객체 자체는 접근이 가능하다. 
이유는 자체로 null이지만 배열객체의 요소로 지정되므로 메모리에 남게되고 
따라서 가비지 컬렉션의 대상이 되지 않기 때문 */
let array = [john]; //위의 덮어쓰기로 john객체 자체는 접근이 불가능하지만 
console.log(JSON.stringify(array[0])); // null이 출력이 된다!

// map에서도 같은 양상을 보인다. 
let tom = {name: "Tom"};
let map = new Map();
map.set(tom, "...");
tom = null; //객체가 null이된다.

for(let obj of map.keys()) {
  console.log(JSON.stringify(obj))
}

console.log(map.size); // 객체의 원소가 null이어도 map객체가 메모리상에 존재하므로 접근가능

/* 문제는 map 자료구조에서 이렇게 사용하면 map이 메모리에 존재하는한 이런 null객체도 메모리에 남는다.
이럴때 weakmap을 사용하면 key로 사용한 객체가 가비지 컬랙션의 대상이 되므로 다른 양상을 보인다. */
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
//weakMap.set('test',"Whoops");

// weakmap이 유용한 순간은 특정 객체가 메모리에서 삭제되면 자동으로 해당객체에 대한 정보도 삭제되는 기능이 필요할때
let visistsCountMap = new WeakMap()

function countUser(user) {
  let count = visistsCountMap.get(user) || 0;
  visistsCountMap.set(user, count+1);
}

let mary = {name:"Mary"};
countUser(mary);

console.log(visistsCountMap);

// weakmap은 caching이 필요할때도 매우 쓸모있다. 
let cache = new Map();

function process(obj) {
  if(!cache.has(obj)) {
    let result = /*연산 수행 */ obj;
    cache.set(obj,result);
  }
  return cache.get(obj2);
}

let obj2 = {};
let result1 = process(obj2);
let result2 = process(obj2);
obj2 = null;
console.log(cache.size); // 1 객체가 여전히 cache에 남아있고 메모리가 낭비되고 있다.