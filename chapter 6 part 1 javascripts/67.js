// method   (this keyword)
// funnction inside object :- koi function object ke andar ho to use method bolte h

// const person ={
//     firstName : "Rohit",
//     Age: 20,
//     About : function () {
//         console.log(`person name is ${this.firstName}and age is ${this.Age}`);
//     }
// }

// console.log(person.About);       // aap dekhe ki about print karne se pura ka pura function print ho rha h 
// // but mujhe pura function nhi chahiye mujhe function kok call karna h taki uske andar jo bhi h vo print ho jaye jaisa function me hota h
// person.About();      // ab ye call ho gya 

// NOTE:- ${this.firstName}  ye hamne isliye likha kyoki by change in future hame eska name ya age change karna padta aur hamne agr sirf eska name likh dete h to ye galt hota kyoki in future eska name change karna pdta to but esme this kya h ye kyo likhte h 
//  esme ham this.key ka name jo hame lena h this ka mtlb hota h ki jis object(person) ke sath . lagakar functio ko call kiya h jaise yha hamne person.About(); likha

// another example

function personInfo() {
    console.log(`person name is ${this.firstName} they are blong to Bihar but live in haryana, Job in ${this.Job} and Age is ${this.Age}`);
}
// note:- hame abhi es function me this kya h aur firstName kya h nhi pta usi tarah job bhi nhi pta kya h

const person1 = {
    firstName :  "Vikas", 
    Age : 24,
    Job : "Railway",
    About : personInfo             // yha About ek key h jiski value vo function h hamne function ko call nhi kiya call karne ke liye About: personInfo()   ye likhna padta jisse call ho jata but hamne yha call nhi kiya 
}
const person2 = {
    firstName :  "Rohit", 
    Age : 20,
    Job : "MNC",
    About : personInfo           // same
}
const person3 = {
    firstName :  "Smriti", 
    Age : 18,
    Job : "No job",
    About : personInfo           // same
}
const person4 = {
    firstName :  "Aryan", 
    Age : 17,
    Job : "No job now study",
    About : personInfo
}
const person5 = {
    firstName :  "Anshu", 
    Age : 15,
    Job : "Study in 10th cls",
    About : personInfo
}

personInfo();           // yha hamne personInfo (function) ko call kiya h aap dekhenge ki firstname and age and job undifined aa rha h 

// but jab ham 
person2.About();          // yha person2 ka about kara to vo function call ho gya or us me firstname  age and job sab ki value esi person se liya esi tarah
person4.About();          // eska kiya to es object ke key ki value liya esa kyo
 
// NOTE:- yha hamne kya kiya obj ka name .About aur yaha about kya h vo function kyoki hamne about me us function ko set kar rkha h aur jab about call hoga to us function bhi call ho jayega jisse
// usme likhe this.firstName and aur jo bhi ho this ke sath usko read karega ab ye this kya h ye janne ke liye ye dekhe ki function kese call hua About se aur about call kisse hua means kon se object se 
//   jis object se call hoga about usi object ke key value ko function me this keyword uski data lega samjhe 



// // short syntax 
// object ke andar jo methos hote h unhi ko method bolte h ye to pata hi h 
// ham usi ko short me kese likh sakte h dekhte h 
// ye to jaise likhte h vese h
const person ={
        firstName : "Rohit",
        Age: 20,
        About : function () {
            console.log(`person name is ${this.firstName}and age is ${this.Age}`);
        }
    }
// ye short me h 
const personnew ={
        firstName : "Rohit",
        Age: 20,
        About() {                //bas yha se function ko hata diya aur about ek key ki tarah nhi h bas
            console.log(`person name is ${this.firstName}and age is ${this.Age}`);
        }
    }


