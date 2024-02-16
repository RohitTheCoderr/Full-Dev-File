// Objects
// arrays are good but not sufficient fro real  world data 
// Objects store key vakue pairs
// objects don't have index
// NOTE:- Objects bhi ek reference type hi h yani jaise arrays store hota h memory me usi tarah objects bhi store hota h

// How to create objects
// NOTE :- Arrays me ham item ko [] me "" ke bich me likhte the but objects me ham {} me kuch es tarah likhte h like
const person= {name:"Rohit", Age:20, Cast:"Barber"};   // name:"Rohit" etne ko ek key value pair kahte hai Age:20  ye ek alag key value pair ho gai  aur ese properties bhi bolte h
console.log(person);  
console.log(typeof person);    // type check karne ke liye

const person1 ={
    name: "Vikas",      // yaha value key string form me hi hota h isliye aap ese "name" es tarah se bhi likh sakte h ya sirf name bhi    Age: 24,
    Cast: "Barber",
    Hobbies:["Lisning music", "traveling", "reading book", "teachig"]        // Objects ke value key me ham array value bhi likh sakte (ya u kahe ki add kar sakte h) hai 
}

//NOTE:- Object me index nhi hota hai TO
// How to access data from object
  // 1st way
  console.log(person.name);
  console.log(person.Cast);
  console.log(person1.name);
  console.log(person1.Hobbies);  // yha hobbies ek normal array ki tarah work karega aap uske sath kuch bi kar sakte h jaise arrays ke sath karte the like
  console.log(person1.Hobbies[3]);  // hobbies ke 3 index vala item print karaya h 
  // 2nd way
  console.log(person["name"]);    // [""] ke ander properties name ya bote to key value likh sakte h but ye hame "" ke ander hi likhna hoga esa isliye bydefoult key values string me hi hote h bhale hi ham object me string ke formet me na likhte ho
  console.log(person["Age"]);
// How to add key value pairs to objects
  person.Gender= "male";  // person variable me gender properties ya bote to key value add kiya h Gender name ka
  person1["Gender"]= "male";  // ese bhi likh sakte h

  console.log(person);    
  console.log(person1);

  
