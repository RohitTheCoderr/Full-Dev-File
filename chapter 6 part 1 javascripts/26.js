// for loop in arrays

let fruits = [ "mango", "Apple", "banana"];

// console.log(fruits.length); // for fine a length of array
// console.log(fruits[0]); // for fine a frist item of array
// console.log(fruits[fruits.length-1]); // for find a last item of array (length - 1)

// for (let i= 0; i< fruits.length; i++) {     //  esme hamne bola ki uski length tak 
// console.log(fruits[i]);   
// }

// //  ham es tarah se bhi likh sakte the
//  for (let i = 0; i <= fruits.length-1; i++) {     // arrays ke last item tak
//     console.log(fruits[i]); 
//  }

//  // deacending order

//  for (let i = fruits.length; i>= 0; i--) {
//     console.log(fruits[i]);
//  }

//  for(let a =fruits.length-1; a>= 0; a--)
//  {
//     console.log(fruits[a]);
//  }


// print one by one in uppercse
for(let i= 0; i<fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}

// ab maan lo hame uppercse me ye item kisi dusre arrays me piush ho jaye to uske liye ham
let fruits2=[];
 for(let i =0; i<fruits.length; i++)
 {
    fruits2.push(fruits[i].toUpperCase()) ;  // esse dusre yani fruits2 me  push ho jayega in upper case me
 }
console.log("Arrays2 item",fruits2);     // dekhne ke liye 