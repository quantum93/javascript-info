var obj1 = {
  outer: function() {
    console.log(this, "obj1");
    var innerFunc = function () {
      console.log(this, "innerFunc");
    };
    innerFunc.call(this);
  }
}
obj1.outer();

var obj2 = {
  outer: function () {
    console.log(this, 'obj2');
    var innerFunc = function () {
      console.log(this, 'innerFunc');
    }.bind(this);
    innerFunc();
  }
};
obj2.outer();