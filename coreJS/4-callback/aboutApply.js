/*
call()과 apply()의 차이는 call은 인자를 개별적으로 받고 apply는 array의 형태로 받는다. 
즉 처리할 인자가 배열의 형태를 지니면 apply를 사용한다. 
*/

const person = { firstName: 'John', lastName: 'Doe'}
function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`
}

let result1 = greet.apply(person, ['Hello', 'How are you?']); //여기서 인자가 배열의 형태
console.log("line 12 =>", result1);

/*
  11번 라인을 call을 써서 처리하려면 greet.apply(person, 'Hello', 'How are you?')로 사용한다.
*/

/*
  call과 마찬가지로 apply로 함수 빌려오기를 할 수 있다. 
*/

const computer = {
  name: 'MacBook', 
  isOn: false, 
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On.`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is off.`;
  }
};

const server = {
  name: 'Dell PowerEdge T30',
  isOn: false
};

// server 객체는 turnOn, turnOff 메소드가 없다. 이 메소드를 빌려오려면,

let result2 = computer.turnOn.apply(server);
console.log("line 43 =>", result2);

/*
  apply 메소드를 이용하면 배열을 다른 배열에 이어붙이는 것이 아주 쉽다.
*/

let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1.push.apply(arr1, arr2);
console.log("line 53 =>", arr1);