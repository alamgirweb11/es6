// syntax of rest parameter
function func(...args){

}

function rest(a,b,...args){
    let sum = 0;
    for(let i of args){
         sum = sum+i;
    }
    console.log(sum);
}
rest(1,3,4,4,5)

function substract(...args){
     return args.filter(e => typeof e === 'number')
     .reduce((prev, curr) => prev - curr);
}
let result = substract(20,'Hi',null,undefined,10); 
console.log(result); //result 10

const combine = (...args) => {
    return args.reduce((prev, curr) => prev + ' ' + curr);
};
let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters