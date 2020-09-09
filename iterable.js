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