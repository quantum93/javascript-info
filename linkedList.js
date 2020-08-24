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
 console.log(sumTo(100));