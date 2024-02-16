//  class keyword 

//  javascript me jo class hoti h vo fake hoti h kyoki jo kaam ham vese kar rhe the vahi kaam class se bhi hoti h sirf aapko feel hogi ki ye kaam class se ho rhe h 

// pichhle examplme ko ham ab class ki help se banate h jisme hamne new and prototype use dekhe the 
 class createUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor is called");                    // ye extra line hame isliye likha kyoki hame pata chale ki constructor kab call ho rha h 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age= age;
        this.address= address;
    }
//  usme ham method ko prototype me banate the but esme banana nhi padega khud ve khud ye prototype me ban jayega bas ese call karane ki jaruarat h jab bhi hame ye sab method chahiye
   about (){ 
    return `${this.firstName} is ${this.age} years old`
}       
   is18 (){
     return this.age >= 18;
}       
   contact (){ 
     return `Email is : ${this.email} Add is ${this.address}` 
 } 
 func(num1, num2){                       // ekn aur method add kiya h aap kitne bhi aur method bana sakte h
    console.log(`sum of two num is ${num1+num2}`);
 }

 }


//  ab hame construcor ko call karna padega with new keyword ki help se bina new keyword ke ham ese call nhi krs sakte 
 const newuser1 = new createUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");                    
const newuser2 = new createUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");              
const newuser3 = new createUser("Aryan", "kumar", "aryankumar3181@gmail.com", 18, "raghubir colony blb"); 
// ham esme sab kaam kar sakte h jo usme karte the like 
console.log(newuser2.firstName);        // user2 ke firstname chahiye 

// ham check bhi kar sakte h ki ye sab method prototype me add hua ya nhi 
console.log(Object.getPrototypeOf(newuser1));          // ye newuser1 ke prototype me dekha h   

// maan lo hame method ko print karana h to vo bhi kar sakte the 
console.log(newuser1.about());          // man lo hame newuser1 ke about ke method ko print karna h to use call kar sakte h 
 newuser2.func(3,5)                //  func method ko call kiya h 


              

 