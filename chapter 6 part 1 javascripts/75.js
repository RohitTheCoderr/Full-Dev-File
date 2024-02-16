//  how to use prototype in function with example



//   ye example hamne js file no 73 me dekha tha 
//  jisme hamne ye dekha tha ki ek hamne proto bana liya tha jisme hamne ye userMethods ko rakh diya tha aur usi se hame jo method chahiye the vo le liya karte the
 
// but hamne ek prototype bhi padha h 74 file me jisme padha h ki function ke pass ek empty prototype hota h ham usi ka use karke userMethods ke andar jitne bhi method ho use rakh kar use kar sakte h
//  esse ye hoga ki hame ek alag se userMethod jaise object banane ki need nhi padegi 
// function ke prototype use kar ke ye sab kaam kar sakte h like

// ab hame es object ki jaruart to nhi h kyoki function ke pass khud ka empty prototype hota h ham use me ye sab method function add kar sakte h 

// const userMethods ={
//     about : function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function () {
//         return this.age >= 18;
//     },
//     contact : function () {
//         return `Email is : ${this.email} Add is ${this.address}`
//     } 

// } 

function createUser (firstName, lastName, email, age, address){         

    const user = Object.create(createUser.prototype);   // yha hamne bola ki agar jo item user me na mile to to ye creatUser ke prototype se le le           
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age= age;
    user.address= address;     
    
    return user;                 // yha user ko return karaya        
}

// pahle ham check karte h ki kya ye createUser ke pass prototype h ya nhi
console.log(createUser.prototype);      // aap dekh sakte h ki h eske pass prototype  
// yha ab ek about name ka method(function) add kar diya h createUser function ke prototype me
createUser.prototype.about = function () {        
            return `${this.firstName} is ${this.age} years old`
        }
 // usi tarah is18 and contact ko bhi add kiya
createUser.prototype. is18 = function () {
            return this.age >= 18;
        } 
createUser.prototype.contact = function () {
            return `Email is : ${this.email} Add is ${this.address}`
        } 

const newuser1 = createUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");               
                                   
const newuser2 = createUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");              
console.log(newuser1.about()); 
console.log(newuser1.is18());   
console.log(newuser1.contact());         
console.log(newuser2.contact());                // maan lo hame newuser2 ka contact chahiye to uske liye bhi yhi likhna padega like this