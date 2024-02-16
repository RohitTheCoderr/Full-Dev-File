//  Primitive vs reference data typys


//  Primitive data typys
let num1= 6;
let num2= num1;
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
console.log("after increament num1");
console.log("value of num1 is ",num1);
console.log("value of num1 is ",num2);

//NOTE:-- Aapne dekha hoga ki num1 ki value 6 and num2 ki value num1 ke equal bana diya jisse num1 and bum2 ki value 6 print hua but jab hamne num1 me inreament kiya to num2 me koi increament nhi hua 
        // esa isliye hua kyoki primitive data type me ek bar ham jiske equal rakh dete h vo hamesa usi ke equal rahta h jab tak ki ham khud usi variable me kuch na kare but reference data type me esa nhi hota h usme ham jitni bar value change karte rahege utni bar uski bhi  value change hoti rahegi 
           

// Reference data typys
// Array
let array1=["item1", "item2", "item3"];
let array2= array1;
console.log("Array1 is ", array1);
console.log("Array2 is ", array2);

array1.push("item4");
console.log("After pushing one item");
console.log("Array1 is ", array1);
console.log("Array2 is ", array2);


// NOTE:-- esme value change karne pr dono me value change hua esa isliye kyoki reference type me value ki address hota h jisse dono ko address milta h aur jab bhi ham ek me value change karenge to dono me showup karega



