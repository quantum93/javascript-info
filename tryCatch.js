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

try {
  hohoho; // 에러, 변수가 정의되어 있지 않음.
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

let json = '{"name":"John", "age":30}';
let user = JSON.parse(json);

console.log(user.name, user.age);

let jsonTwo = "{bad json}";

try {
  let user = JSON.parse(jsonTwo);
  console.log(user.name);
} catch (e) {
  console.log("데이터에 에러가 있어서 재요청을 시도",e.name, e.message);
}

let jsonThree = '{"age":30}';
try {
  let user = JSON.parse(jsonThree);
  console.log(user.name); //name이 없으므로 undefined를 출력한다. 
} catch (e) {
  console.log("실행되지 않습니다.") // 입력에 문제가 없으므로 이 라인이 실행되지는 않는다. 
}

try {
  JSON.parse("{잘못된 형식의 json o_O}");
} catch(e) {
  console.log(e.name, e.message);
}

let jsonFour = '{"age":30}'; //name key가 존재하지 않는 json객체
try {
  let user = JSON.parse(jsonFour);
  if(!jsonFour.name) {
    throw new SyntaxError("불완전한 데이터:이름 없음");
  }
  console.log(user.name); 
} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: 불완전한 데이터 이름 없음
}


let jsonFive = '{ "age": 30 }'; // 불완전한 데이터
try {
  myUser = JSON.parse(jsonFive); // <-- user 앞에 let을 붙이는 걸 잊었네요.
} catch(err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (실제론 JSON Error가 아닙니다.)
}

let jsonSix = '{"age":30}';
try {
  let user = JSON.parse(jsonSix);
  if(!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름이 없음!")
  }
  blabla();
  console.log(user.name);
} catch(e) {
  if(e instanceof SyntaxError) {
    console.log("JSON Error: " + e.message);
  } else {
    throw e;
  }
}

function readData() {
  let json = '{"age":30}';
  try {
    blabla(); //error will be happened.
  } catch (e) {
    if(!(e instanceof SyntaxError)) {
      throw e;
    }
  }
}

try {
  readData(); //
} catch(e) {
  console.log("External catch got: " + e); 
}