// break  keyword
//  continue keyword

// break keyword
for (let index = 0; index <=10; index++) {
    if (index===5) {
        break
    }
    console.log(index);
}
console.log("Exit from for loop");

// NOTE:-- es me kya ho rha jane hamne ek for loop lagaya jisme bola ki 0 se lekar 10 tak print karna h 
//       but hamne ek aur condition laga diya ki agar index ki value 5 ke barabar aa jaye to vahi se loop band ho jaye 
//       chahe bhale hi hamne loop me bola ho ki 10 tak chale but eske andar me hi hamne break keyword laga diya jisse
//       statement loop se bahar aa jayega aur agar bahar koi statement ho to vo chalega jaise ki upar h



// continue keyword
for (let index1 = 0; index1 <=10; index1++) {
    if (index1===5) {
        continue
    }
    console.log(index1);
}
console.log("Hello, you are Exit from for loop");

// NOTE:--  es me kya ho rha h jane ek for loop me hamne bola ki 0 se 10  tak print karna h but for loop ke ander hi hamne ek if condition bhi laga diya 
//      jisme ye hua if condition se ki agar jab bhi index=== 5 ke equal ho jaye to vo loop ko aage na chala kar vahi se fir se suru ke loop me la dega jisse
//      console ko chhod kar fir se for loop ke statement me chala jayega jisse 5 print bhi nhi aur ye chalta rahega jab tak loop me likhe condition se bahar na aa jaye jaisa ki upar h



