//  while loop in arrays

const fruits= ["Apple", "Banana", "Grapes"];

console.log(typeof(fruits));
// let i= 0;
// while (i<fruits.length) {
//     console.log(fruits[i].toUpperCase());
//     i++;
// }
 
// agar yahi chij hame dusre const variable me push karna ho to esi tarah kar sakte h jaise pahle kiya tha
const fruits2=[];
let i= 0;
while (i<fruits.length) {
    fruits2.push(fruits[i].toUpperCase());   // uppercase me 
    i++;
}
console.log("fruits is ",fruits);
console.log("fruits2 is ",fruits2);


