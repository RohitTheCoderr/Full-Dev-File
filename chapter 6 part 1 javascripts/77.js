// how to use of new keyword with example

//  ab ham yha new keyword ko pichhle example me use kar ke dekhte h 
//   new keyword manualy 3 kaam karta tha 
// 1) empty object create karta h jise this ke equal kar deta h like ==>  this = {}   
// 2) fir us this ko return krta h bina return keyword use kiye 
// 3) fir ye jo pichhle file me prototype ko function ke equal rakhte the ye same kaam kar ke dega like pichhle me ham ye line likhte the ==>  const user = Object.create(createUser.prototype);  


function createUser (firstName, lastName, email, age, address){         
    //  ab hame es line ki need nhi h 
    // const user = Object.create(createUser.prototype);   // yha hamne bola ki agar jo item user me na mile to to ye creatUser ke prototype se le le           
    // user obj ki need nhi h isliye user ke jagah this lagana padega like
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age= age;
    this.address= address;     
    // return this;             // yha ham this ko return kara bhi sakte h ya nhi bhi kyoki new keyword khus se this ko return kara deta h karane ki jarurat nhi h ham ese commentout bhi kar sakte h       
}

// pahle ham check karte h ki kya ye createUser ke pass prototype h ya nhi
console.log(createUser.prototype);      // aap dekh sakte h ki h eske pass prototype  
// yha ab ek about name ka method(function) add kar diya h createUser function ke prototype me
createUser.prototype.about = function () {        
            return `${this.firstName} is ${this.age} years old`
        }
 // usi tarah is18 and contact ko bhi add kiya
createUser.prototype.is18 = function () {
            return this.age >= 18;
        } 
createUser.prototype.contact = function () {
            return `Email is : ${this.email} Add is ${this.address}`
        } 

const newuser1 = new createUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");                    
const newuser2 = new createUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");              
const newuser3 = new createUser("Aryan", "kumar", "aryankumar3181@gmail.com", 18, "raghubir colony blb");              
// yha ham kisi ka about is18 ya contact bhi delh sakte h like
console.log(newuser2.about()); 
console.log(newuser3.is18());     
console.log(newuser1.contact());         



