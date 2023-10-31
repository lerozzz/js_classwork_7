let f1 = document.querySelector('.f-1');
function one() {
    console.log('work');
}

one();
// f1.onclick = one;//без круглых скобок, иначе функция отработает и рез запишется в это свойство
//  f1.onclick = function () {
//     console.log('Hello');
// }
f1.onclick = () => {
    console.log('Hello');
}



console.log(1 + one());
console.log(one());//undefined
function two() {
    console.log('work 22222');
    return 54;
}
two();
console.log(1 + two());

let a = 8;
let b = 9;

function multi() {
    console.log(a * b);
    return a * b;
}
multi();
let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x = 9, y = 6) {
    return x * y
    //дальше код не работает
}
console.log(multi2(4, a));
console.log(multi2());
console.log(multi2(10));


document.querySelector('.f-2').onclick = () => {
    console.log('arrow');
    console.log('+++++++++');
}
// function (a) {
//     return 56 * a;
// }

// (a) => 'Hello' * a;