var coffeeList = '';

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, 'Americano');
}

var addAmericano = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, 'cafeMocha');
}

var addMocha = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, 'cafeLatte');
}

var addLatte = function (name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
}

setTimeout(addEspresso, 500, 'espresso');