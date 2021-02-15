const func = function (x) {
  console.log(this, x);
};

func(1); // func를 독립함수로 호출

let obj = { method: func };
obj.method(2); // func를 객체의 메소드로 호출