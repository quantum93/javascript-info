var obj = {
  logThis: function() {
    console.log(this, 'noTimeout');
  },
  logThisLater1: function() {
    setTimeout(this.logThis,500);
  },
/*   logThisLater2: function() {
    setTimeout(this.logThis.bind(this), 1000);
  } */
};

obj.logThisLater1();
//obj.logThisLater2();
