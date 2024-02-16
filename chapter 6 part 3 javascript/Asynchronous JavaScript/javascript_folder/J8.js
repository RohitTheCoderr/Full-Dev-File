//  pormise && setTimeout both use in a single use

// I want to resolve / reject promise after 2 second

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value= false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)   // 2000 means 2 second
    })
}


myPromise().then(()=>{console.log("resolved");}
).catch(()=>{console.log("rejected");})

















