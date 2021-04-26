// different within var,let,const
/****
 * 1.var
 * var can be re-decalred
 * var can be reassigned a value
 */
/***
 * 2.let
 * let cannot be re-declared
 * let can be reassigned
 */
/***
 * 3.const
 * cannot be re-decalared
 * cannot be reassigned
 */

// example of var
var city = "Khulna";
city = "Dhaka"; //re-assign
console.log(city); // result: Dhaka

var name = "Adeb";
var name = "Raton"; // re-declare
console.log(name); // result Raton

// example of let
let district = "Khulna";
district = "Dhaka"; //re-assign
console.log(district); // result: Dhaka

let role = "User";
// let role = "Admin"; // get error // cannot re-declare
console.log(role); 

// example of const
const string = "Lorem"; 
// string = "Lorem"; // get error   //cannot re-assign
console.log(string);  

const greetings = "Welcome"; 
// greetings = "Good Morning"; // get error   //cannot re-declared
console.log(greetings);  

// variable scope
/**
 * two type of variable scope
 * 1.global scope //get access from everywhere
 * 2.local scope // get access from decalare block
 */

// example of global scope
let person_name = "Abir Ahmed";
function getName(){
    //   console.log(person_name);  //get result
}
getName();

console.log(person_name); // also get result

// example of local scope

function getArea(area_name){
       area_name = 'Dhaka';
       console.log(area_name); // get result Dhaka
}
getArea();
console.log(area_name); // get error area_name is not defined