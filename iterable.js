let range = { from: 1, to:5 }; // 루프가 되지 않는 객체를 만든다. 

range[Symbol.iterator] = function () { //Symbol.iterator는 이터레이터 객체를 반환
  return {
    current: this.from, 
    last: this.to,
    next() {
      return (this.current <= this.last) ? {done:false, value:this.current++}: {done:true};
    }
  };
};

for (let num of range) {
  console.log(num);
}

/* 이터러블 객체의 핵심은 '관심사의 분리(Separation of concern, SoC)'에 있습니다. range엔 메서드 next()가 없습니다. 대신 range[Symbol.iterator]()를 호출해서 만든 ‘이터레이터’ 객체와 이 객체의 메서드 next()에서 반복에 사용될 값을 만들어냅니다. 이렇게 하면 이터레이터 객체와 반복 대상인 객체를 분리할 수 있습니다. 이터레이터 객체와 반복 대상 객체를 합쳐서 range 자체를 이터레이터로 만들면 코드가 더 간단해집니다. */

let range2 = {
  from:6, 
  to:10,
  [Symbol.iterator] () { // 이제 range[Symbol.iterator]()가 객체 range 자체를 반환합니다.
    this.current = this.from;
    return this;
  },

  next () {
  return (this.current <= this.to) ? {done:false, value:this.current++}: {done:true};
  }
}

for (let num2 of range2) {
  console.log(num2);
}

// 배열과 문자열은 가장 자주 쓰이는 내장 이터러블이다. 
for (let char of "test") {
  console.log(char);
}

/* 이런 이터레이터를 명시적으로 호출하면 좋을 때가 있는데, 이 방법을 사용하면 for..of를 사용하는 것보다 반복 
과정을 더 잘 통제할 수 있다는 장점이 있습니다. 반복을 시작했다가 잠시 멈춰 다른 작업을 하다가 다시 반복을 
시작하는 것과 같이 반복 과정을 여러 개로 쪼개는 것이 가능합니다. */
let str = "Hello";
let iterator = str[Symbol.iterator](); //변수선언을 이용 명시적으로 호출 
while(true) {
  let result = iterator.next();
  if(result.done) break;
  console.log(result.value);
}

// 유사 배열
let arraylike = { //인덱스와 length property가 존재하는 유사 배열
  0: "Hello",
  1: "World",
  length: 2
};

// Symbol.iterator가 없으므로 에러가 발생한다. 
/* for (let item of arraylike) { //TypeError: arraylike is not iterable
  console.log(item);
} */

//Array.from은 이터러블이나 유사배열을 받아서 진짜 array로 변환
let arr = Array.from(arraylike);
console.log(arr.pop()); //제대로 작동한다. 

