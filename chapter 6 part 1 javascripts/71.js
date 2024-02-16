// creat function to creat multiple Object

// const user = {
//     firstName : "Rohit",
//     lastName : "Thakur",
//     email : "rohitkumar9643017@gmail.com",
//     age : 20, 
//     address : "houseNo, area, pincode, state",
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },

//     is18 : function () {
//         return this.age >= 18;
//     }
// }
// // NOTE:- aap dekh hi sakte h hamne ek object banaya h jiske andar ek method(function) banaya h ese kese use karte h ye to jante hi h like
// const userInfo = user.about();                           // call kar diya but ye function hame print nhi balki return kar rha h return ko store ke liye ham ese ek variable userInfo me store krte h
// console.log(userInfo);                           // ab es variable ko print kara ke dekhte h
// // aap dekh sakte h ye this kaam kar rha h but ???
// //  ye to sirf ek user ke liye tha but maan lo ese hi hame lakho karoro user chahiye jisme uska name address, age aur bhi kuch sab alag honge to kya ham sab ka ek ek data dalenge ji nhi uske liye ham\
// // ek function banayenge jisme user se ek input lega jaise name , address, age aur bhi kuch jo ham chahe vo aur ye function hame ek object return krega like jaise ki upar ka user name ka object h 
// // eska kuch stap hoga jo es tarah ka hoga

// // 1) function(that function create object)
// // 2) ate key value pair
// // 3) object ko return karega

// function creatUser (firstName, lastName, email, age, address){         // ye parameter h jisme value lega 
//         const user ={};                                        // ye sab value es object me store karega abhi ye empty h
//         // user.firstName= "rohit"                             // ham ek empty object me key value pair store karne ke liye but yha hame to key ki value parameter se leni h isliye value ke jagah parameter lenge like
//         user.firstName = firstName;
//         user.lastName = lastName;
//         user.email = email;
//         user.age= age;
//         user.address= address;
//         user.about = function() {                   // yha hame ye about ka function bhi to likhna padega but ese ham parameter me nhi lenge kyoki ye function to same hi rahenge na 
//                        return `${this.firstName} is ${this.age} years old`
//                      };
//         user.is18 = function () {                   // esiu tarah ye is18 function bhi same rakhna h  ye kya karega agar ye condition sahi hoga to true return karega nhi to false
//                         return this.age >= 18;
//                     }

//      return user;                  // yha hamne user ko return kara liya aap confuse na ho kyoki ye sab ek function me likha h aur function me jo bhi condition likhte h use ham print ya return kara sakte h isliye hamne ese return kara liya h 
// }

// const user1 = creatUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony")          // ye sab createUser ke parameter ki value h sath me hamne ese return kiya tha isliye yha ese user1 variable me store kra liya h 
// console.log(user1);        // ab ese print kara liya h dekhte h kya print hota h  
// //  yaha tak to thik h but hame user me likhe function(method) ko call bhi to karna h 

// // note:-aap yha sochenge ki function to user ke about me h but user1.about kyo kiya h jara aap dyaan se dekhiye data bastab me createUser ke parameter se aa rhe h aur ye store kisme ho rhe h ti user1 me isliye yaha user1.about likha h  
// const aboutUser= user1.about();       // yha user ke about me function ko return kiya h isliye ese dusre variable me store krna padega 
// console.log(aboutUser);              // fir ese print kara diya 
// // esi tarah is18 function ko bhi call kara sakte h like
// const is18fun =user1.is18();
// console.log("age is 18+ ?? ",is18fun);            

// NOTE:- BIG NOTE ab esse to ye clear ho gya hi har user ke liye bar bar object banane ki jarurat nhi h bas ek object banao aur use ek function me daal do fir use use kr lo jaise ki abhi upar me kiya h 
// NOTE:- BUT  esme bhi ek problem h ye vo h ki ham jitni bar new user lenege ham utni bar object me about and is18 function banega but ye to sahi nhi h kyoki ham lakho bar newuser lenge to utni bar hi ye function banegi aur ye space lega memory me isliye esse bachne ke liye ham kuch ese bana sakte h like

// yha hamne kya kiya ki about and is18 function jo ki bar bar user object bante time ye bhi bar bar ban rhe the isliye ese hamne bahar ek object userMethod me daal diya ab jab bhi newuser object creat hoga bas about ko call karna padega bas sab ke liye 
const userMethods ={
    about : function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function () {
        return this.age >= 18;
    }
} 

function creatUser (firstName, lastName, email, age, address){         
    const user ={};                                       
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age= age;
    user.address= address;
    user.about = userMethods.about;      // yha hamne us about function ka reference(address) dala h jo ki userMethod ke object me h  jisse vo function call ho jayega
    user.is18 = userMethods.is18;        // same yha bhi is18 function ka reference(address) dala h jo ki userMethod ke object me h  jisse vo function call ho jayega

 return user;                  
}

const newuser1 = creatUser("Rohit", "kumar", "rohitkumar9643017@gmail.com", 17, "tirkha colony");               
console.log(newuser1.about());              // yha kya hoga jo creatUser jo function h uski value return hogi jo ki newuser1 me store hogi fir yah print hoga jisse about ko call hoga fir 
                                            // fir user object me about ki value pr jayega jisse vaha userMethod ke about ko call ho jayega fir vo firstname and jo bhi usme hoga vo user object se le lega   
const newuser2 = creatUser("Mohit", "thakur", "aakumar66333@gmail.com", 20, "tirkha colony");
console.log(newuser1.about());   
console.log(newuser1.is18());   
 
// NOTE:- AB AAP DEKH SAKTE H ESME about and is18 fucntion bar bar nhi ban rhe h balki ek bar ban gai h ab usi ko call ho rha h bar bar jab jab newuser create ho rha h 
// NOTE:- but esme bhi ek problem h vese ham esko aur improve kar rhe h ese samjhne ke liye ham next js file par chalte h 
