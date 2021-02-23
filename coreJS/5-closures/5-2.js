var outer = function() {
  var a = 1;
  var inner = function() { return ++a; };
  return inner(); // 함수의 실행 결과를 반환
};
var outer2 = outer();
console.log(outer2);