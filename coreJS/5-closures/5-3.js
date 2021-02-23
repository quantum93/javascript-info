/* 
  아래 경우는 outer함수가 이미 실행 종료가 된 시점(15 lines)에도 여전히 inner함수는 
  언젠가 outer2를 실행해서 inner함수에 접근할 수 있는 여지가 있다. 이런 경우 가비지 콜렉터는
  어떤 값을 참조하는 변수가 하나라도 있게되는 상황이고 이런 상황에서 가비지 콜렉터는 해당 변수의
  정보를 수집하지 않는다. 즉 해당 변수정보를 없에버리지 않고 여전히 들고 있다. 따라서 17 라인에서
  다시 outer2가 호출되면 이전 변수결과에 보태어져 결과를 출력한다.
*/

var outer = function() {
  var a = 1;
  var inner = function() {return ++a;};
  return inner; // 함수의 실행결과가 아닌 함수 자체를 반환
};

var outer2 = outer();
console.log(outer2()); // outer2의 변수는 outer의 실행결과인 inner함수를 참조
console.log(outer2());