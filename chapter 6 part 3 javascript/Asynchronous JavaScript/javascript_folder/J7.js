//  function returning promise

function ricePromise(){
    const bucket= ['coffee', 'chips', 'vegetables', 'salt',"rice"]
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("Couldn't do it");
        }
    })
}
// ab ricePromise ek function h isliye ese call karne ke liye () lagana padega na function ke name ke sath fir kaam same hoga jiase pichle me ho rha tha
ricePromise().then((myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}).catch((error)=>{
    console.log(error);
})