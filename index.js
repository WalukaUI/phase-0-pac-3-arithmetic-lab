
function add(a,b){
    return a+b;
}
add(1,2);

function subtract(a,b){
    return a-b;
}
subtract(6,4);

function multiply(a,b){
    return a*b;
}
multiply(4,4);

function divide(a,b){
    return a/b;
}
divide(4,2);

function increment(n){
    return n+=1;
}
increment();

function decrement(n){
    return n-=1;
}
decrement();

function makeInt(n){
    return parseInt(n,10);
}
makeInt('1.2358');

function preserveDecimal(n){
    return parseFloat(n)
}
preserveDecimal("10.566")