// es6 function 
/**
 * Simple function
 * Parameterized function
 * Rest Parameter
 * Returning functions
 * Anonymous function
 * Parameterized Anonymous function
 * Arrow functions
 * The function contstructor
 */

//  simple function
function sum1(){
    let a = 10;
    let b = 10;
    let c = a+b;
    console.log(c);
}
sum1();

// parameterized function
function sum2(a,b){
    let c = a+b;
     console.log(c);
}
sum2(10,10);


// return function
function returnFunc1(){
     return "I am from return function.";
}
console.log(returnFunc1());

// return function within function
function returnFirst(){
     return returnSecond();
}
function returnSecond(){
     return "I am from returnSecond function.";
}
console.log(returnFirst());

// anonymous function
// exmaple 1
let anoFunc1 = function(){
     return "Anonymous function";
}
console.log(anoFunc1());

// example2
let anoFunc2 = function(...args){
      return args;
}
console.log(anoFunc2(1,3,4,4,5));

// arrow function syntax
//1. ()=>{}
// 2. let arrowFunc = () => {}

// example 1
let arrowFunc1 = () => {
     console.log("Hello");
}
arrowFunc1();

// example 2
let arrowFunc2 = (n,m) => {
      let f = n+m;
      console.log(f);
}
arrowFunc2(50,50);

// example 3 return arrow function
let arrowFunc3 = () => {
     return "I return hello";
}
console.log(arrowFunc3());

// constructor function
function person(name,age,address){
     this.name = name;
     this.age = age;
     this.address = address;
}
let getPerson = new person('Abir',21,'Dhaka');
console.log(getPerson);