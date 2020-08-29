/* let user = {
  name: "John",
  surname: "Smith"
} */

/** 이 객체에 fullName 이라는 프로퍼티를 추가해 fullName이 'John Smith'가 되도록 해봅시다. 기존 값을 복사-붙여넣기 하지 않고 fullName이 'John Smith'가 되도록 하려면 접근자 프로퍼티를 구현하면 됩니다. */

let user = {
  name: "John",
  surname: "Smith",

  /* 이렇게 getter와 setter 메서드를 구현하면 객체엔 fullName이라는 '가상’의 프로퍼티가 생깁니다. 
  가상의 프로퍼티는 읽고 쓸 순 있지만 실제로는 존재하지 않습니다. */
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
}

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";
console.log(user.name, user.surname);
