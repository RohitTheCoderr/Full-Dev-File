//  Hoisting 

// Hoisting:- jab ham function declare karne se pahle hi function ko call kar dete h to use Hoisting bolte h
//  ye sirf function declaraction me hi hota h 
//  Function expression  and  Arrow function me nhi hota h
// note := niche example h function declaraction ka 
hello();

function hello() {
    console.log("Hello world");
}

// note:= niche example h function expression ka jo ki esme nhi hota h isliye error show ho rha h
// singSong();

// const singSong=function () {         
// console.log("Happy Birthday too you... ");
// }

// note:= esa Arrow function me bhi nhi hota h usme bhi error show hota h

singSong();

const singSong= () => {         
console.log("Happy Birthday too you... ");
}




