// map declaration
 var firstMap = new Map();
 firstMap.set('key1','Value of key1');
 firstMap.set('key2','Value of key2');
 firstMap.set('key3','Value of key3');
//  print only keys
 console.log(firstMap.keys());
//  print only values
 console.log(firstMap.values());
//  for of loop to print key
for(let key of firstMap.keys()){
       console.log(key);
}
//  for of loop to print values
for(let value of firstMap.values()){
       console.log(value);
}

// some method of Map
/**
 * keys()
 * values()
 * set(key,value)
 * get(key)
 * delete(key)
 * clear()
 * has(value)
 */
let secondMap  = new Map();

secondMap.set('key4','Value of key4');
secondMap.set('key5','Value of key5');
secondMap.set('key6','Value of key6');

secondMap.delete('key4'); // it delete the key1 pair

// secondMap.clear(); // remove all object

console.log(secondMap.get('key5')); //get only key5 pair

for(let secondMapKey of secondMap.keys()){
    console.log(secondMapKey);
}

// check value using has method
if(secondMap.has('key6')){
    console.log('I found data.');
}else{
    console.log("I don't found data."); 
}

