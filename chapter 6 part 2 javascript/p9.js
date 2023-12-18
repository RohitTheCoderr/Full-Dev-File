
function myfun(power) {
    return function (number) {
        return number**power;
    }
}

const cube = myfun(3);
const ans = cube(2);
console.log(ans);