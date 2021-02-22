/* 
  callback은 method가 아니라 함수로 작동한다. 중요한 점은 이때문에 객체의 다른 property 정보는 
  모두 잊어버리고 함수로서 다른 함수에 그 제어권을 넘긴다. 때문에 callback 함수에 property 정보를 
  같이 보내기 위해서는 무기명 함수로 outer scope를 지정하던가 .bind(object)를 붙여서 객체 정보를
  제어권을 가지는 함수에 알려줘야 한다. 
*/

let person = {
  name: 'Jone Doe',
  getName: function () { console.log(this.name); }
};

setTimeout(person.getName, 1000);

/* getName이라는 메소드를 setTimeout함수에 callback 함수로 넘기면 this 정보를 잃어버린다. 
따라서 undefined가 출력된다. 이유는 setTimeout 함수가 person object에서 분리된 person.getName 
함수를 받기 때문이다. 즉 callback 함수는 함수 정보만을 넘기지 object의 정보까지 합체된 method로 작동하지
않는다. 

setTimeout(person.getName, 1000);

은 다음의 과정과 동일하다고 볼 수 있는데

let f = person.getName;
setTimeout(f, 1000); <-- setTimeout() 함수의 this는 전역객체를 가리킨다. (strict mode에서는 
  undefined를 가리킨다. ) 이렇게 되면 person.getName이 호출될때 전역객체에 name이라는 property가 
  존재하지 않는 상황이 된다. 따라서 undefined

이 문제를 해결하는 방법 중에 하나가,

*/

setTimeout(function () {person.getName();}, 1000);

/* person.getName() method를 무기명 함수로 감싸면 outer scope에서 person을 얻고 getName()을 호출
 생각해보면 무기명 함수안에는 person이 정의되어 있지 않으므로 scope를 hoisting 한다. 따라서 상위객체인 전역
 에서 person을 찾게 되므로 getName()을 접근할 수 있게 된다.  
*/

let f = person.getName.bind(person);
setTimeout(f, 1000);

// 이렇게 하면 bind method가 person 객체 정보를 getName 함수에 알려주는 역할을 한다. 

// bind() method를 이용하면 다른 객체에서 method를 빌려올 수 있다.

let runner = {
  name: 'Runner',
  run: function(speed) { console.log(this.name + ' runs at ' + speed + ' mph.'); }
};

let flyer = {
  name: 'Flyer',
  fly: function(spped) { console.log(this.name + ' flies at ' + speed + ' mph.'); }
}

let run = runner.run.bind(flyer, 20);
run();

//이렇게 되면 runner.run 메소드를 flyer 객체에 빌려주는 효과를 보인다. 

/* Summary

  The bind() method creates a new function, when invoked, has the this sets to a provided value.
  
  The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

*/
