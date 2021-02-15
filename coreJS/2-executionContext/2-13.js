var a = 1;
var outer = function () {
  var inner = function () {
    console.log("line 4", a);
    var a = 3;
  };
  inner();
  console.log("line 8", a);
};

outer();
console.log("line 12", a);