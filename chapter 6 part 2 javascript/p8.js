// example of closure

function hello(p) {
    const a = "Name1";
    const b = "Name2";
   return function inner() {
        console.log(a,b,p);
    }


}

const ans = hello("arg");
ans(); 