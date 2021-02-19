var Cat = function (name, age) {
  this.bark = 'mew';
  this.name = name;
  this.age = age;
};

var choco = new Cat('choco', 7);
var nabi = new Cat('nabi', 5);

console.log(choco, nabi);