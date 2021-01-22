/** 배열에서 요소의 앞에 삽입이나 삭제는 번호를 다시 메겨야 하므로 수행시간이 오래걸리는 반면
 * 배열의 요소 맨뒤에 삽입이나 삭제는 수행시간이 오래걸리지 않는다. 빠른 삽입이나 삭제가 
 * 필요할때 사용하는 것이 linked list이다. 
 */

// list는 value와 next method를 객체에 대해서 적용.
let list = {value: 1, next:{value: 2, next:{value: 3, next:{value: 4, next:null}}}};
//console.log(list, list.next, list.next.next, list.next.next.next);


// list에 새로운 값을 리스트의 맨 앞에 추가. 이때 리스트의 특성때문에 요소번호를 전부 새로 매기는것이 필요없다.
list = {value:"new item", next: list};
//console.log(list);

// 중간 요소를 제거하는 방법
list.next = list.next.next;
console.log(list.next);

/** linked list를 사용하면 가장 큰 장점은 list의 중간에 요소 삽입/삭제가 매우 빠르다. 
 * 단점은 index번호만 이용해서 요소에 빨리 접근할 수 없다. 
 * 만일 중간에 있는 요소의 삽입/삭제가 필요없고 리스트의 양 끝에만 작업이 필요한 경우(일반 배열과 
 * 비교할때 리스트의 맨 앞에서 작업이 필요하면) 특별히 이럴때는 queue나 dequeue를 이용해서 
 * 해결하는 것이 좋은 선택
 * */

 const sumTo = n => n > 1 ? n + sumTo(n-1): 1;
 const factorial = n => n != 1 ? n*factorial(n-1): 1;
 const fibonacci = n => (n <= 2) ? 1 :fibonacci(n-1) + fibonacci(n-2) ;
 // 그런데 이렇게 재귀를 사용해 구현하면 n이 커질 경우 속도가 느려집니다. fib(77)을 호출하면 CPU 리소스를 다 잡아먹어서 잠시 엔진이 멈출 수도 있. 연산 속도가 느려지는 이유는 함수 호출 도중에 수많은 서브 호출이 일어나기 때문입니다. 같은 값들이 여러 번 평가되면서 이런 일이 발생하죠.
 const fib = n => {
   let a =1, b = 1;
   for(let i = 3; i <=n; i++) {
     let c = a + b;
     a = b;
     b = c;
   }
   return b;
 }
 console.log(sumTo(100));
 console.log(factorial(5));
 console.log(fibonacci(7));
 console.log(fib(77));

 // 일단 현재 list.value를 뽑으면 가장 위의 값(첫째값)부터 출력하고 
 // 재귀로 루프를 돌때마다 list.next의 깊이가 하나씩 들어간다.
 const printList = (list) => {
   console.log(list.value);
   if (list.next) printList(list.next); // 재귀로 작동하므로 return이 굳이 필요없다.
  }
  console.log(printList(list));
  
  // 반대로 이 경우 일단 재귀로 가장 깊은 요소로 내려간다음 거기서 부터 value를 뽑으니까 역순으로 
  // 결과를 접근하는 효과를 가진다. 이 방법은 오묘한 점은 최종 깊이를 몰라도 상관없다는 것이다. 
 const printListRev = (list) => {
   if (list.next) printListRev(list.next); // 재귀로 작동하므로 return이 굳이 필요없다.
   console.log(list.value);
}
  console.log(printListRev(list));