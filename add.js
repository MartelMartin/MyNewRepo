console.log("Hi");
console.log(Math.max(1,2,3));
const numbers = [4,5,110,0,1];

console.log("Spread Operator: "+ Math.max(...numbers));

function add(a,b){
    return a + b;
}
console.log(add(3,4,5,6,7));

function add1(a,b, ...restn){
    console.log(restn);
    return a+b;
}
console.log(add1(3,4,5,6,7));