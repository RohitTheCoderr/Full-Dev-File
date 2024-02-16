//  reduce method of array

const numbers = [32,2,41,43,4,5,7,9];
//Aim :-  My aim is sum of all numbers of uper array use of reduce method 
const reduceMethod = numbers.reduce((accumulator , currentValue)=> {
    return accumulator + currentValue ;
})
console.log(reduceMethod);

// how to work reduce method track karte h

                 // accumulator(take)       currentValue(take)      return(sum)
//sabsepahle array se      32                       2                    34
// fir har bar return se   34                      41                    75         
//                         75                      43                   118
//                        118                       4                    122
//                        122                       5                    127                              
//                        134                       9                    143
 // NOTE:- upar vale example me accumulator me pahla value kya aa rha tha array ki first item and currentValue me array ki second item 
//     But ham accumulator mr ham bydefault kuch bhi value le sakte h uske liye ham jaha return ke bad } ye bracket band hota h vahi uske value le sakte h
//      jisse currentValue array ki first item se suru hoga 
// aap eska example niche vale example me dekh sakte h

// realastic example

const userCart = [
    {productId: 12 , productName: "mobile", price: 12000},
    {productId: 13 , productName: "Tv", price: 14000},
    {productId: 11, productName: "laptop", price: 58000}
]

const totalAmount= userCart.reduce((totalPrice , currentProduct) =>{
return totalPrice + currentProduct.price;            // yha totalPrice me to 0 pahle hoga and currentPrice ek poarametter h jo ki userCart ke first item means object ke price ki value lega and use + kar dega totalPrice ke sath aur esa bar bar hoga jab tak array me sab item me move na ho jaye
}, 0)      // yha jo 0 liya h vo bydefault value h totalPrice ki jisse currentPrice array ke first item se suru hoga

console.log(`Total Amount of product = ${totalAmount}`);


 