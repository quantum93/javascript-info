let arr = ["Bora", "Lee"];

/* 아래와 같이 각각 직접 변수를 정의하는 것 보다는 구조를 분해해서 작성하
는 기법을 알고 있으면 무척 편리
let firstName = arr[0];
let lastName = arr[1];
 */

let [firstName, lastName] = arr;
console.log(firstName, lastName);

/* 또는 다음과 같은 조합도 유용한 경우가 많다.
let [firstName, lastName] = "Bora Lee".split(" ");
*/

// destructuring은 destructive하지 않다. 즉 mutation을 일으키지 않는다고 이해

/* 쉼표를 사용하면 적절히 배열 값의 취사 선택도 가능하다. 
아래의 예에서 보듯 두번째 요소는 건너뛰고 3번째 이후도 무시 하고 
필요한 요소만 선택적으로 할당이 가능 */

let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title);

let [a,b,c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1,2,3]); // [1,2,3]
let user = {};
[user.name, user.surname] = "Bora Lee".split(" ");
console.log(user.name); // Bora

let myUser = {
  name:"John",
  age:30
};

/* .entries()로 반복하기: 이 메서드와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있습니다. */

for(let [key,value] of Object.entries(myUser)) {
  console.log(`${key}:${value}`)
}

/* destructring을 이용하면 변수를 교환하는 트릭에 잘 사용할 수 있다. */
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);