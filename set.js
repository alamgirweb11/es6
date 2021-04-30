// basic set type syntax
// set ingore the duplicate value 
let firstSet = new Set();
firstSet.add("Arif");
firstSet.add("Rakib");
firstSet.add("Jarif");
firstSet.add("Kamal");
firstSet.add("Khalil");
firstSet.add("Khalil");
console.log(firstSet);

// some method of set
/**
 * .clear
 * .delete(value)
 * .has(value)
 * .values
 * .Set.size
 */

 let secondtSet = new Set();
 secondtSet.add("India");
 secondtSet.add("Nepal");
 secondtSet.add("Bangladesh");
 secondtSet.add("Pakistan");
 secondtSet.add("Soudi Arabia");
 secondtSet.add("China");
// clear() delete all value
// secondtSet.clear();
// delete() delete specific value
secondtSet.delete('India');
console.log(secondtSet);
// has() check the available value
if(secondtSet.has('Pakistan')){
     console.log('Yes available');
}else{
    console.log('Not available');
}
// size() get the all amount of set
console.log(secondtSet.size);
// vlaues() print only value
console.log(secondtSet.values());