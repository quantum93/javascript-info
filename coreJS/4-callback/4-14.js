new Promise(function (resolve) {
  setTimeout(function () {
    var name = 'espresso';
    console.log(name);
    resolve(name);
  }, 500);
}).then(function (prevName) {
  return 
})