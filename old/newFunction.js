function getFunc() {
  let value = "test";
  // let func = new Function('console.log(value)'); ReferenceError: value is not defined
  let func = function() { console.log(value); };
  return func();
}

getFunc(); 

/** return func 한 다음 getFunc()() 하거나 return func() 한 다음 getFunc()하면 같은 결과 */