// Object inside array
// Its very useful in real world aapplication

const users= [
    {Name:"Rohit",
    Course: "MCA",
    contact:9654853181,
    Email:"aakumar66333@gmail.com",
    gender:"male"
},
{
    Name:"Anshu",
    class:"10th",
    contact: 8447700863,
    gender:"female"

},
{
    Name:"Aryan",
    class:"11th",
    contact: 8447700863,
    gender:"male"

},
{
    Name:"Smriti",
    Course:"BA",
    contact: 9654791770,
    gender:"female"
},
{
    Name:"Vikas",
    Work:"Join Railway job",
    contact: 9835682420,
    gender:"male"
}
];

console.log(users[0]);    // koi perticular index ko print karne ke liye
console.log(users);
//  for of loop 

for(let user of users){      // esse kya ho rha ki users ki value ek ek kar ke user me push ho jayegi
    console.log(user);
}


