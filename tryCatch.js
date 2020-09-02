/** try..catch문에서는 다음과 같은 점을 기억해야 한다. 
 * 1. runtime error만을 잡는다. 즉 문법적으로 오류가 있는 에러는 잡아내지 못한다. 
 * 2. 동기적으로 작동하므로 비동기적인 함수는 try안에 사용하면 안된다. 이경우 오히려 
 * 해당 비동기 함수 안에서 try..catch문을 사용해야 한다. 
 */

try {
  console.log("try 블록 시작");
  lalala; // 에러, 변수가 정의되지 않음!
  console.log("try 블록 끝");
} catch (err) {
  console.log("이걸 본다는 것은 코드가 뭔가 문제가 있다.");
}

/* try {
  setTimeout(function() {
    noSuchVariable; // ReferenceError: noSuchVariable is not defined
  }, 1000);
} catch(err) {
  console.log("작동 멈춤");
} */

setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log("에러를 잡았습니다!")
  }
}, 1000);