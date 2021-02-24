// (1) return에 의한 클로저의 메모리 해제
var outer = (function () {
  var a = 1;
  var inner = function() { return ++a; }
  return inner;
})();

console.log(outer());
console.log(outer());
outer = null; //identifier에 참조형이 아닌 기본형 데이터를 할당하면 closure에 garbage collection이 실행.

// (2) setInterval에 의한 클로저의 메모리 해제
(function() {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if(++a >= 10) { 
      clearInterval(intervalId);
      inner = null; // inner identifier의 함수 참조를 끊음.
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

// (3) eventListener에 의한 클로저의 메모리 해제
(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function () {
    console.log(++count, 'thimes clicked');
    if(count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null; // clickHandler 식별자의 함수 참조를 끊음.
    }
  };
  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();