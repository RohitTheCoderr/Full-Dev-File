// Function ( Function expression)

// function expression karne ke liye ham function ko ek variable me assign kar dete h like

const singSong=function () {         // yaha par hamne ek function ko const type ke variable me assign kar diya
                                    // yaha ham let, var const kisi bhi type ka variable bana sakte h but i thing const is better 
    console.log("Happy Birthday too you... ");
}

singSong();      // yaha function ko call kara diya

// note: ye same function declaraction ki tarah hi kaam karega 

const EvenNum= function(num1) {
    return num1 % 2 == 0;
}

console.log(EvenNum(5));  

// find a same number in array  using function expression 
const findSameNum = function (Array=[], Num){         // ham yha emply aaray parametter liye h but ham ek variable bi le sakte the baat same h like array 
    for(let i=0; i <= Array.length; i++){
    if(Array[i]== Num) {
        return `Same number is availbal in ${i} index`;
    }
    }
    return   "No found any same number in this Array" ;
}

const myArray=[21,3,546,6,7,65,35,213,4,16,17,13,1,23,54,24,789,90,98,,70,786,]
console.log(findSameNum(myArray, 23));













