// example of Clorsers

function hello(p) {
    const a = "Name1";
    const b = "Name2";
    return function () {
        console.log(a,b,p);
    }
}

const ans = hello("arg");
ans(); 