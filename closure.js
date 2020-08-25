const sayHiBye = (firstName, lastName) => {
  const getFullName = () => firstName + "" + lastName;
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
console.log(sayHiBye("John", "Silver"));

const makeCounter = () => {
  let count = 0;
  return () => count++; //함수 이름이 없어도 상관없다. 어디선가 호출할게 아니면...
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

