/** '분해(destructuring)'는 '파괴(destructive)'를 의미하지 않는다.
 * 구조 분해 할당이란 명칭은 어떤 것을 복사한 이후에 변수로 '분해(destructurize)'해준다는 의미다. 
 * 이 과정에서 분해 대상은 수정 또는 파괴되지 않습니다. 배열의 요소를 직접 변수에 할당하는 것보다 
 * 코드 양이 줄어든다는 점만 다르다.
 * 
 * let firstName = arr[0];
 * let surname = arr[1]; 이렇게 쓰는 것보다 
 * 
 * let [firstName, surname] = arr; 이렇게 쓰는 것이 더 간략하기 때문
 * 
 * 이렇게 하면 인덱스를 이용해 배열에 접근하지 않고도 변수로 이름과 성을 사용할 수 있게 되었다.
 */

let [firstName, surname] = "Bora Lee".split(' '); //문자열이 배열로 배열의 원소가 직접할당.

// 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있습니다. 아래에 두 번째 요소는 필요하지 않으면,
let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log( title ); // Consul

/** assignment 연산자의 우측에는 어떤 iterable도 놓을 수 있다. 또한 연산자의 좌측에는 할당이 가능한 모든 것을 놓을 수 있다. */
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
let user = {};
[user.name, user.surname] = "Bora Lee".split(' ');
console.log(user, user.name); // Bora
//심지어 할당하고자는 변수의 개수가 분해하고자 하는 배열의 길이보다 크더라도 에러가 없이 undefined를 할당한다. 
let [firstName2, surname2] = [];
console.log(firstName2, surname2);
//또는 기본값을 할당에서 설정하는것도 가능하다. 
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];
console.log(name3, surname3);
//let [surname4 = prompt('Enter your last name'), name4 = prompt("Enter your first name")] = ["Kim"];
let [surname4 = prompt('성을 입력하세요.'), name4 = prompt('이름을 입력하세요.')] = ["Kim"];
console.log(surname4, name4);

/** rest operator와 같이 사용하면 또한 강력한 기능을 할 수 있다. */
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1, name2, "rest:", rest[0], rest[1], rest.length);
