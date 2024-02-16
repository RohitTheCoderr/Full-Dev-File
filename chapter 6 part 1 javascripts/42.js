//  Arrow Function  

// ye function expression h
// const singSong=function () {  
//      console.log("Happy Birthday too you... ");
//     }
//     singSong(); 
    
    // upar jo function declaraction h esi function ko ab ham arrow function me change karte h
    
    const singSong =() =>  {     // yaha hamne function word hata kar () ke bad => arrow lagaya ese hi ham arrow function bolte h 
           console.log("Happy Birthday too you... Rohit ");
        
    }
     singSong();    // function call 
    //  Note:- ek hi function ko aap 2 bar nhi create kar sakte h 
    //    means aap ek function ko alag alag function method se nhi bana sakte jaise aap ek function ko arrow function se banaya ab usi function ko aap declaraction function se banana chahte h to error show hoga ki aapne same function banaya h

    // check odd or even is output is true, then number will be even otherwise output is false means number is odd 
 const isEven =(number) => {
    return number % 2 == 0;
 }
 console.log(isEven(135424));


//  find number in array   
const myArray= [1,3,2,5,7,8,25,13,12,4,6,16,18,0,9,67,5,43,10];

   const findChar = (array=[], finder) => {
    for (let index = 0; index <= array.length ; index++) {
        if (array[index]==finder) {
            return `${finder} is avaible in ${index} index position `;
        }
    }
    return `${finder} number is not avaible in the array`;
   }

    console.log(findChar(myArray, 110));    // yha myArray se item Arrow function ki array me bhej rha h 


// NOTE:-  basic note  agar function me sirf ek hi input leni ho to parametter me ()  hata sakte h like 

const isOdd = number  => {        // yha es arrow function me sirf ek hi input lena tha number isliye number ko hamne () ke angar nhi liya h 
    if( number % 2 != 0){
        return "number is odd";
    }
    else{
        return "number is even";
    }
 }
 console.log(isOdd(135));



