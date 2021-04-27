// basic for loop
let i;
for(i=0; i<=10; i++){
    console.log('Hello');
}

// for in loop
let names = ['Abir','Akash','Ratul'];
for(let name of names){
       console.log(name);
}

// for of loop
let info = {ShirtColor:"red",PantColor : "black"};
// print only property
for(let props in info){
     console.log(props);
}
// print only value
for(let props in info){
      console.log(info[props]);
}
// print property and value both
for(let props in info){
    console.log(props+ " = " +info[props]);
}