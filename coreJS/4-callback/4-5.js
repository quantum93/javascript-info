// 실제 사용하는 표준 map method에서 여러 예외처리나 에러처리를 제외한 핵심 기능만을 구현한 코드

Array.prototype.map = function (callback, thisArg) {
  var mappedArr = [];
  for(var i = 0; this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

// 여기서 thisArg 즉 특정한 객체에 대한 this정보가 별도로 없으면 this는 자동으로 전역객체를 가리킨다.  

