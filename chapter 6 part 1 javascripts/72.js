// create __proto__ [[prototype]]      // dono same h but prototype ye alag h kyoki ye [[]] es me nhi likha h isliye eske bare aage padhenge

// NOTE:- maan lo hame about, is18 ke alava aur bhi hajaro method (object ke ander bane function ko method bhi bolte h) banane h to kya ham etne sare banate rahenge
//       use bana ke fir use call bhi karna padega kabhi kabhi esa bhi ho sakta h ki kisi method ko reference karna hi bhul gye to hamara mehnat bekar chala jayega na 
//       ese se bachne ke liye ham kuch karenge but usse pahle ham kuch samjhte h uske liye ham next js file yani 73.js me jana hoga so lets go..   


// note:-  ab ham eske angar kitne bhi method bana sakte h jise call karane ke liye alag se koi line nhi likhna padega 
const userMethods ={
    about : function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function () {
        return this.age >= 18;
    },
    contact : function () {
        return `Email is : ${this.email} Add is ${this.address}`
    } 

} 

function creatUser (firstName, lastName, email, age, address){         
    // const user ={};                                       // empty banane ke liye es tarah ki jaruart nhi h 
    const user = Object.create(userMethods);                // ese bhi bana sakte h yha hamne ek empty bhi bana liya aur sath me proto bhi create kar li proto kya h ye hamne 73.js me samjh hi liya 
                                                        //    esse kya hoga ki agar ko ham print karana chahte h es object user se vo agr eske pass nhi h to vo apne proto se lekar print kara dega aur proto me vo kaha se aayege to vo userMethod se le lega jaise ki hamne agle js file me pada h
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age= age;
    user.address= address;
    // user.about = userMethods.about;            // ab hame eski jarurat nhi padegi bar bar userMethods ko refenrece dene ki ya call karne ki  
    // user.is18 = userMethods.is18;        
    
    return user;                  
}

const newuser1 = creatUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");               
console.log(newuser1.about());                                    
const newuser2 = creatUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");
console.log(newuser1.about());              
console.log(newuser1.is18());   
console.log(newuser1.contact());          // ab jo bhi method chahiye use mentio kar  do fir use print karane ka comound daal do us method ko call karne ki jaruart nhi h kyoki agr user ke pas ye method nhi milega to vo apne proto se lega aur proto me userMethod se data store le hi rrha h 
console.log(newuser2.contact());           // newuser2 ka chahiye to vhi ese bi le lega 