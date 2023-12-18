//  string indexing

let firstName = "Rohit kumar";

// stirng   // R  o  h  i  t  _  k  u  m  a  r   // here _ means space ok 
// index    // 0  1  2  3  4  5  6  7  8  9  10 

// we want to print 4th index letter then can print like this 
console.log(firstName[4]);  //here print t because our 4th index letter is t
console.log(firstName[5]);   // here print space because 5th index is space
console.log(firstName[5,6,8]);  // here we want to print 5th 6th and 8th index 
//but only print 8th index




// if we want to print total length of string then 
let secondName = "kumar thakur"
console.log(secondName.length);    // when we not know what is lenght of stirng

console.log(secondName.length-1);  // when we want to print last elemenet of this string 
console.log(secondName.length-2);   // when we want to print last 2nd elemenet of this string 
console.log(secondName.length/2);   // when we want to print half of element in this stirng 
console.log(secondName[secondName.length/2]);
console.log(secondName[secondName.length-1]);  // print last element  
console.log(secondName[secondName.length]);    // undefined show because hamne mention nahi kiya ki kon sa element print karna h if we wan to all element print ho to simply we can use only variable name like 

console.log(secondName);

