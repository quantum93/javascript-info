// Declare an integer array of 6 elements
let intArr = new Array(6);
let length = 0;

// Add 3 elements to the Array
for(let i = 0; i < 3; i++) {
  intArr[length] = i;
  length++
}

//use console.log to help us visualise what's happening.
for(let i = 0; i < intArr.length; i++) {
  console.log(`index ${i} contains ${intArr[i]}`);
}

// map method doesn't print the value of 'undefined'
intArr.map((e,i) => console.log(`index ${i} contains ${e}`));

/* Insert a new element at the end of the Array. Again,
it's important to ensure that there is enough space
in the array for inserting a new element. */
intArr[length] = 10;
length++;

for(let i = 0; i < intArr.length; i++) {
  console.log(`index ${i} contains ${intArr[i]}`);
}

/* To insert an element at the start of an Array, we'll need to shift all other elements in the Array to the right by one index to create space for the new element. This is a very costly operation, since each of the existing elements has to be shifted one step to the right. The need to shift everything implies that this is not a constant time operation. In fact, the time taken for insertion at the beginning of an Array will be proportional to the length of the Array. In terms of time complexity analysis, this is a linear time complexity: O(N), where N is the length of the Array. */

/* First, we will have to create space for a new element. We do that by shifting each element one index to the right. This will firstly move the element at index 3, then 2, then 1, then finally 0. We need to go backwards to avoid overwriting any elements. */

for(let i = 3; i >= 0; i--) {
  intArr[i+1] = intArr[i];
}

/* Now that we have created space for the new element, we can insert it at the beginning. */
intArr[0] = 20;

intArr.map((e,i) => console.log(`index ${i} contains ${e}`));

/* Similarly, for inserting at any given index, we first need to shift all the elements from that index onwards one position to the right. Once the space is created for the new element, we proceed with the insertion. If you think about it, insertion at the beginning is basically a special case of inserting an element at a given index—in that case, the given index was 0. */

// Say we want to insert the element at index 2. First, we will have to create space for the new element.

for(let i = 4; i >= 2; i--) {
  intArr[i+1] = intArr[i];
}

// Now that we have created space for the new element, we can insert it at the required index.
intArr[2] = 30;

intArr.map((e,i) => console.log(`index ${i} contains ${e}`));