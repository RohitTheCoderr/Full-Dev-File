//  fetch 

const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatISThis= fetch(URL)
// console.log(whatISThis);

 fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
 .then(Response => {
     // console.log(Response);    // yha  hame vo data nhi mil rhi h jo hame xhr me response krne se mil rhi thi eske liye yha ek method  json name ke aaiye use karte h 
    if (Response.ok) {
        return Response.json()
    }else{
        throw new Error ("Something went wrong !!!")
    }

 })
.then(data => {
    console.log(data);
//   return data;
})
.catch(error =>{
    console.log("inside catch");
    console.log(error);
})
// .then(url=>{
//     const url1=`${URL}/` 
// })




