console.log("this is js7 tutorial in html ");
 function greet(name, greetText = " greetign from javascript"){ // yha hamne grreText me ek default value pass karai h esa isliye kiya jata h agar hamne kisi greet me koi greet ki value pass nahi karai h to ye autometic ye value le lega jaise ki greet(name2) me nahi karaiu hai
    let name1 = "name1";    // yha name ek variable banaya h ye ek local variable h kyoki ye function ke local scope me h bahar ese koi nahi janta h ese sirf function keandar hi  janata h aur vahar ke variable ko globle varible bolte h 
    console.log(greetText + " " + name);
    console.log(name+ " is a good boy");
 }

 function sum(a,b,c){
    let d= a + b + c;
    return d;
 }

let name = "Rohit"; // ye globle variable h  kyoki ye function h globle scope me h
let name1 = "Aryan";
let name2 = "Anshu";
let name3 = "Vikas";
let greetText = "Good morning";
greet(name, greetText);
greet(name1, greetText);
greet(name3, greetText);
greet(name2); // here we are not pass tha greeting value so here autometic catch the value of greet from function
 

// let returnVal = greet(name3);
// console.log(returnVal);


let returnVal = sum(12,23,23);
console.log("sum= "+returnVal);    // both line meaning is same this line and below line
console.log(`sum= ${returnVal}`);



//  console.log("Rohit is a good boy");
//  console.log(name1+ " is a good boy");
//  console.log(name2+ " is a good girl");
//  console.log(name3+ " is a good boy");
//  console.log(name+ " is a good boy");