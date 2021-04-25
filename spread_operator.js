// spread operator (...) 
let firstArray = [1,3,5,7];
let secondArray = [...firstArray,9,11,13];
console.log(secondArray);

// spread operator with function argument
function funcArg(x,y, ...args){
      console.log(args); // skip x,y value  result [ 4, 5, 5, 5 ]
}
funcArg(1,2,4,5,5,5); 

let Letters = ['A','B',...'CDE','F'];
console.log(Letters);

// spread operator with apply method
function subtract(a,b){
      return a-b;
}
let sResult = subtract.apply(null,[1,2]); 
console.log(sResult); // result a=1 b=2 1-2=-1

// spread operator with push method
let rivers = ['Padma','Meghna'];
let moreRiver = ['Jamuna'];

let allRivers = rivers.push(...moreRiver);
console.log(allRivers);  // result 3

