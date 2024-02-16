// for in loop in arrays

const vegs= ["chili", "radish", "patato"];
for(let index in vegs){       // in vale me kya hota h ki esme item ki index store hoti h like use print karte h sirf index ko
    console.log(index);    
}

// agar hame uski item ko print karni ho to kuch ese likh sakte h

// const fruits= ["Apple1", "Apple2", "Apple3"];

// for(let index in vegs){       // in vale me kya hota h ki esme item ki index store hoti h but ham yha us index ki item print karte h
//     console.log(fruits[index]);    
// }

// kisi dusreconst variable me daal sakte h
const fruits= ["Apple1", "Apple2", "Apple3"];
const fruits2= []; 

for(let index in vegs){       
    fruits2.push(fruits[index].toUpperCase());   // upper case me print karne ke liye .touppercase use kiye   
}
console.log(fruits2);

// NOTE:- let i=0 vale for loop ko tradisnal loop bolte h like
 
for (let i= 0; i<fruits.length; i++){
console.log(fruits[i]);
}
