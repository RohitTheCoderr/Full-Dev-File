function createUser (firstName, lastName, email, age, address){         
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age= age;
    this.address= address;     
          
}

console.log(createUser.prototype);  

createUser.prototype.about = function () {        
            return `${this.firstName} is ${this.age} years old`
        }
 
createUser.prototype.is18 = function () {
            return this.age >= 18;
        } 
createUser.prototype.contact = function () {
            return `Email is : ${this.email} Add is ${this.address}`
        } 

const newuser1 = new createUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");                    
const newuser2 = new createUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");              
const newuser3 = new createUser("Aryan", "kumar", "aryankumar3181@gmail.com", 18, "raghubir colony blb");              

//  maan lo hame newuser1 ke key dekhne ho to ham use dekh sakte h for in loop laga ke like
for(let key in newuser1){
    console.log(key);            // aap esa karke newuser1 ke andar kitne key h vo check kr skte h 
}
//NOTE:-  aap dekh sakte h ki key print krne pr ye createUser me jitne bhi key h vo to la hi rhe h BUT sath me prototype me jo key h like about, is18 contact ye sab bhi la rhe h 
//  BUT maan lo aapko prototype vale key nhi chahiye to uske liye ek property laga sakte h like

for(let keys in newuser2){           // yha hamne bas newuser2 ki keys kari h 
    if (newuser2.hasOwnProperty(keys)) {            // yha condition lagaya ki agar newuser2 ke pass jitne bhi khud ke keys h vo  prototype vale chhod kar
        console.log(keys);                          // to vo use print kar de 
    }
    // else me kuch nhi likha h kyoki kuch nhi karana h yha 
}
// NOTE:- aap dekh sakte h ki esa karne se sirf createUser ke andr jitne bhi khud ke keys h sirf vhi print huye h
