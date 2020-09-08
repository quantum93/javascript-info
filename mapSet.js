/** 복잡한 자료구조에는 다음 네가지가 존재한다. 
 * 1. object = collection with literal key type only
 * 2. array = collection with order
 * 3. map = collection with various key type // map method와는 다른 것이다.
 * 4. set = collection without key and duplication
 */

let myMap = new Map();

myMap.set('1', 'strOne');
myMap.set(1, 'number One');
myMap.set(true, 'booleanOne');

console.log(myMap.get(1), myMap.get('1'), myMap.size);