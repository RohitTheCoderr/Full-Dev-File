// async await
// 

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then(response =>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data);
// })

const URL = "https://jsonplaceholder.typicode.com/posts";

// ham ek function banate h like but ye ek normal function h but agr ham eske aage async laga dete h to ye ab normal fun nhi rha bydefault jab bi mai es fun ko (getPosts) ko call karunga to har bar ye mujhe ek promise return dega  
// async function getPosts() {
// const response = await fetch(URL);          // await lagane se ye hoga hi ye jab tak wait karega jab tak ye redolve na ho jaye 
// if(!response.ok){
//     throw new Error(" ee")
// }
// const data =await response.json();
// return data;
// console.log(data);
// console.log(response);
// } 
// const myData= getPosts();     // aap dekhe ki hamne fun me return krne ke bad bi to hame data na mil ke promise hi mil rha h 

//  agr ham ye fun ko arrow fun me likhte to async kaha lagate dekhe
const getPosts = async()=> {
    const response = await fetch(URL);          // await lagane se ye hoga hi ye jab tak wait karega jab tak ye redolve na ho jaye 
    if(!response.ok){
        throw new Error(" ee")
    }
    const data =await response.json();
    return data;
    // console.log(data);
    // console.log(response);
    } 
getPosts()
.then(myData =>{
    console.log(myData);
})
.catch(error=>{
    console.log("inside catch");
    console.log(error);
})







