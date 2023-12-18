// rules for naming variables

// var 1Name = "rohit"      //(Invalid or unexpected token) because number is not valid in the first letter of any name of variable but you can use number in last or middle like this
// console.log(1Name);

var Name1 ="rohit";   // (valid)
console.log(Name1);

var value1 = 103;
console.log("value1 is " +value1);
console.log(value1*2);
 var value2 = value1*2;

console.log(value2 + 5);   // Add any value
console.log(value1 ** 2); // square of value1 
console.log(value1 ** 3); // quave of value1 
console.log(value1 ** 0.5); // suare root of value1 


// you can use only underscore _ or doller $ symble like
//   first_name ="gduwvw";  (valid)
//   _firstname = "jgwedb";  (valid)
//   first$name ="gduwvw";  (valid)
//   $firstname = "jgwedb";  (valid)

// example 

var first_name=  "Aryan";
var _lastname = " kumar";
console.log(first_name + _lastname );

var first$name = "Rohit";
var $lastname = "Thakur";
console.log(first$name + $lastname );

//   you cannot use space between variable like

// var first name ="Rohit";      //  (invalide) because space is not allow but you can use underscore in place of space likes
//  var first_name ="Rohit";     // That is called snake case writing
//  var firstName = "Rohit";     // That is called camel case writing
 
 
 //  convention
 // you can use start with Big letter but it is not called a good practice for a devloper
 
 // start with small letter and camel case writing it is good practice like
 var firstName = "Rohit";     // That is called camel case writing
