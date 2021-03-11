

/*
새로운 배열을 반환하는 접근

var duplicateZeros = function(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    console.log(i);
      if(arr[i] === 0) {
         result.push(0);
          result.push(0);
      } else {
         result.push(arr[i]) 
      }
  }
  return result;
};

배열을 문자열로 바꾸고 정규식을 이용해서 치환하는 접근

const duplicateZeros = (arr) => {
  return arr.join('').replace(/0/g, '00').slice(0,arr.length).split('').map(e => +e);
}; 

*/

var duplicateZeros = function(arr) {
  let possibleDups = 0;
  let myLength = arr.length - 1
  for(let left = 0; left <= myLength - possibleDups; left++) {
      if(arr[left] == 0) {
          if(left == myLength - possibleDups) {
              arr[myLength] = 0;
              myLength -= 1;
              break;
          }
          possibleDups++;
      }
  }
  
  let last = myLength - possibleDups;
  for(let i = last; i >= 0; i--) {
      if(arr[i] == 0) {
          arr[i+possibleDups] = 0;
          possibleDups--;
          arr[i+possibleDups] = 0;
      } else {
          arr[i+possibleDups] = arr[i];
      }
  }
};

//duplicateZeros([1,0,2,3,0,4,5,0]);

const fastSolution = (arr) => {
  for(let i = 0; i <arr.length; i++) {
    if(arr[i] === 0) {
      arr.splice(i,0,0); // i 인덱스부터 0개의 원소를 삭제하고 0을 삽입
      arr.pop();
      i++;
      console.log(i);
    }
  };
  return arr;
};

console.log(fastSolution([1,0,2,3,0,4,5,0]));