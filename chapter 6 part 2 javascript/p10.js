function func(){
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hi you called me");
            counter ++; 
        }
        else{
            console.log("Ooh! dear you already calle me");
        }
    }
}


const myFunc = func();
myFunc();
myFunc();
myFunc();
myFunc();