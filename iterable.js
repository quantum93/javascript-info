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