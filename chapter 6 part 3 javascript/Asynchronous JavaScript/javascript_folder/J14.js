//  same work by using promise method

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
                // const data = JSON.parse(xhr.response);
                // console.log(data);
        }
        else{
            reject(new Error("Something went wrong!!!"))
        }
    }
  xhr.onerror= ()=>
{
    reject(new Error("Something went wrong!!!  / Network error"))
}
        xhr.send();
     })
}


// ab  hame kya krnea padega ki jo sendRequest fun h use call karna pdega to karte h
// const whatIsThis = sendRequest("GET", URL);
// console.log(whatIsThis);
// hame pata h ki hame esme ye kaam nhi karna h hame resolve and reject ko call karaan h uske liye .then for resolve ke liye and .catch for reject ke liye laga sakte h 

sendRequest("GET", URL)
.then(response =>{
    // console.log(response);   // esse hame JSON mil rhi h ab mai kya kaam kar sakta hu ki
    const data = JSON.parse(response); 
    // console.log(data);
    return data;      // hamne es data ko return kara liya kyoki resolve kuch return karti h  
})
.then(data => {     // agr upar data retun hoi ho to yani resolve chal gai ho to data retun hua hoga aur data return hua ho to ham ek aur then method laga sakte h ese me jisme data ko store kara le rhe h 
    // console.log(data);   // hame ye data store karake dega h
    // console.log(data[5]);   // jiise ham eske andr kuch bi kar sakte h jaise ki yha hamne eske 5th index ke item ko print kar ke dekha h 
    const Id = data[3].id;   //esi tarah hamne 3rd index ko select kiya h jise hamne id me store kara liya h 
    return Id;   // fir ese return kara dunga kyoki then method bi kuch return krta h 
})
.then(id=>{   // esi tarah es id ko next then me use kr sakte h agr resolve ho gya to 
const url1= `${URL}/${id}`
// console.log(url1);
return sendRequest("GET", url1)
})
.then(newResponse =>{
    const newdata =JSON.parse(newResponse);
    // console.log(newdata);
    return newdata;  
})





