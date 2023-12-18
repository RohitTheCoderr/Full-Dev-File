// if else condition

let age = 2;

if (age>=18) {
    console.log("User can play this game");
    console.log("because 18+ age");
}
else{
    console.log("user cannot play this game");
    console.log("because age is under 18");
}

let num = 24334;
if (num%2===0) {
    console.log(`${num} is a even number`);
}
else{
console.log(`${num} is a odd number`);

}

// falsy values:- niche sab falsy value h jise if condition me use karenge to condition false hoga jisse else vala condition run hoga like

// false
// ""
// null
// undefined
// 0

// example

// let firstName =false;
// firstName= "";
// firstName=null;
// firstName       //undefined
let firstName=0;
 if (firstName) {
    console.log(firstName);
 }
else{
    console.log("else run hua kyoki ye falsy value h");
}


// truely value:- falsy value ko chhod kar sab truely value hote h like

// example
// let secName = true;
let secName= 1;    // -1 bhi truely value hi hoga sivaye 0 ke
secName = "Aryan Anshu Smriti Vikas"
if (secName) {
    console.log(secName) 
}
 else{
    console.log("Hi Rohit");
 }



 