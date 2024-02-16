// // Object inside array ka nested destructing karna
// Note:- agar aapko kuch kam array me karna h to uske liye aapko []  symbol use karna padega aur
//        agar aapko kuch kaam Object ke anger karna ho to uske lioye aap {} symbol use kare like aap liche uska use dekh sakte h


const users= [
    {Name:"Rohit", Course: "MCA", contact:9654853181, Email:"aakumar66333@gmail.com", gender:"male"
},
{
    Name:"Anshu", class:"10th", contact: 8447700863, gender:"female"

},
{
    Name:"Aryan", class:"11th", contact: 8447700863, gender:"male"

},
{
    Name:"Smriti", Course:"BA", contact: 9654791770, gender:"female"
}
]

// const [user1, user2, user3, user4]=users;     // yha hamne array users name ke ek ek item ko user1 user2 user3 and user4 Name ke variable me push kiya ab use ham ek ek karke print kra skte h ese destructing kahte h
// const[user1, user2, , user4]=users;   // maan lo agar hame user3 nhi chahiye to uske liye ham use skip kar sakte h uske liye hame sirf , laga dena h
// console.log(user1);    // user1 me jo bhi key h use print kara rhe h kyoki user1 ek Object h

let[{Name:UserName, contact}, user2, , {gender}]=users;      // yaha hamne jo users name ka jo array h uske 1st item ke (object) h uske andar jo Name name ka key h uska name hamne change karke UserName rakha h vese use ham user1 Object name ka object  bana kar ke bhi uske andar kuch kam kar sakte the but ye direct ese bhi kar sakte h
// agar Name me kuch value change karni ho to use kar sakte h but uske liye hame let variable banana padega uper hi const ke jagah pr   

console.log(UserName, contact);   // Name key ka name change ho kar UserName ho gya isliye UserName print karne pr Name ki value print ho rhi h  aap , dal kar us object ki ek se kyada value bhi print kra sakte h
console.log(gender);     // yaha gender 4th object ka batayega kyoki 3rd to skip kr diya h
console.log(user2);   









