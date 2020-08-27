/** object의 property(key:value)에는 flag가 존재. flag는 세가지가 있는데 dafault는 항상 
 * true이고 수정가능한 상태로 설정된다. 
 * 객체 프로퍼티는 값(value) 과 함께 플래그(flag)라 불리는 특별한 속성 세 가지를 갖는다.
 * writable – true이면 값을 수정할 수 있다. 그렇지 않다면 읽기만 가능하다.
 * enumerable – true이면 반복문을 사용해 나열할 수 있다. 그렇지 않다면 반복문을 사용해 나열할 수 없다.
 * configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능하다. 
 * 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능하다.
 * 
 * Object.getOwnPropertyDescriptor메서드를 사용하면 특정 프로퍼티에 대한 정보를 모두 얻을 수 있다.
 * 
 */

let user = {
  name: "John",
}
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

let user2 = { };

Object.defineProperty(user2, "name", { value: "John" }); // 플래그를 변경하는 단계

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');
console.log(JSON.stringify(descriptor2, null, 2));


//writable 플래그를 사용해 user.name에 값을 쓰지 못하도록(non-writable) 해봅시다.
function writable() {
  'use strict';
  let user3 = {name: "John"};
  Object.defineProperty(user3, "name", {writable:false});
  user3.name = "Pete";
  return user3;
}
//console.log(writable()); //TypeError: Cannot assign to read only property 'name' of object '#<Object>'



