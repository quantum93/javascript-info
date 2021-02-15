var a = 1;
function outer() {
  function inner() {
    console.log(a); //outer() 실행에서 a는 undefined를 반환
    var a = 3;
  }
  inner(); // inner함수가 호출되고 
  console.log(a); // 3이 아니라 1이 반환된다. inner함수 내부의 var a = 3할당을 알지 못한다.  
}
outer();
console.log(a); // 함수가 호출되지 않고 바로 1번 라인의 a 변수에 할당 값인 1이 반환된다. 