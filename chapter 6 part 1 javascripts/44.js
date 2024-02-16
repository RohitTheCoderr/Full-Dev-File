//  Function inside function 


// note funcction ke andar kitne bhi function bana sakte h aur ye tino function me kar sakte h like function declaraaction, function expression, Arrow function
//  note:- but andar vale function jab tak run nhi hoga jab tak use andar hi call na kar rakhe ho.
// Note:- 
const app = () =>{                       // ese Arrow function bolte h
    console.log("Function");

const newApp = function(){                // ese function expression bolte h ye Arrow function kr andar hi bana h
    console.log("Inside function");
} 

  function mulNum(num1, num2) {         // ese function declaraction bolte h ye Arrow function kr andar hi bana h
    return num1 * num2; 
 }

newApp();                     
 const newVariable= mulNum(3, 5);    // es line me hamne mulNum ko call bhi kiya aur es function ka value newVariable me daal diya fir next line me newVariable k print kara diya 
 console.log(newVariable);

}

app();    // Arrow function ko call hua h







