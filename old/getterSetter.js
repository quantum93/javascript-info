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


let user2 = {
  name: "Doyeon",
  surname: "Lim"
};


/* 아래와 같이 defineProperty에 설명자 get과 set을 전달하면 fullName을 위한 접근자를 만든다.프로퍼티는 접근자 프로퍼티(get/set 메서드를 가짐)나 데이터 프로퍼티(value를 가짐) 중 한 종류에만 속하고 둘 다에 속할 수 없다. 한 프로퍼티에 get과 value를 동시에 설정하면 에러가 발생. */

Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(user2.fullName);
for(let key in user2) console.log(key);

// getter와 setter를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면, 프로퍼티 값을 원하는 대로 통제할 수 있다.
let user3 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if(value.length < 4) {
      console.log("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
      return;
    }
    this._name = value;
  }
}

user3.name = "Pete";
console.log(user3.name);
user3.name = "Joe";


/** 접근자 프로퍼티는 언제 어느 때나 getter와 setter를 사용해 데이터 프로퍼티의 행동과 값을 원하는 대로 조정할 수 있게 해준다는 점에서 유용. 데이터 프로퍼티 name과 age를 사용해서 사용자를 나타내는 객체를 구현한다고 가정한다. */

function User(name, age) {
  this.name = name;
  this.age = age;
}

let tae = new User("Tae", 48);
console.log(tae.age);

/** 그런데 곧 요구사항이 바뀌어서 age 대신에 birthday를 저장해야 할때 즉, age보다는 birthday가 더 정확하고 편리하기 때문인데 기존 코드들은 그대로 두고 대신 age를 위한 getter를 추가해서 문제를 해결. 이렇게 하면 기존 age 정보도 여전히 사용히 가능해 진다. */

function User2(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let doyeon = new User2("Doyeon", new Date(1975, 2, 24));
console.log(doyeon.birthday, doyeon.age);