// default parameters

// function addTwoNum(a,b) {
//     return a+b;    
// }

// addTwoNum(3,4);  // hamne value ko retun to kiya but print nhi kiya uske liye ham
// console.log(addTwoNum(3,4));      // ese likhenge to call bhi ho jayega aur return ki value bi print ho jayegi
// // ham new variable bana ke us me return ki value dal kar bi print kara skte h like
// const newVar = addTwoNum(3,4);
// console.log(newVar);

// default parameters  example
// old method

function sumNum(a, b) {
    if (typeof b=="undefined") {    // agr hm b ki value pass nhi krte h to undefined ki hoga us condition me ye if lau ho jaye yani b ki value 0 ho jaye jisse sum me b ki value 0 sum ko
        b = 0; 
    }
    return a + b;
}

console.log(sumNum(5));     // yha hamne single value pass ki h jab ki to value pass karni thi a and b ki do value pass nhi ki isliye value + default= NaN parint ho rha usi se bachne ke liye ham
                            // pahle ham default parameters ki condition laga dete the if condition like 
                
// new method

function sumNum(a, b=0) {     // ham yhi pr b=0 likh dete h ese ye hoga ki agar b ki value pass nhi hue h to b ki vakue 0 le le apne aap
   
    return a + b;
}

console.log(sumNum(5)); 


