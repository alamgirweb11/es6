// example without static keyword
class withoutStatic{
     printName(name){
          console.log(name);
     }
}
// call the non static class
let nonStatic = new withoutStatic();
nonStatic.printName('Abir Ahmed');

// example with static keyword
class withStatic{
    static printMe(){
       console.log("Calling from static method");
     }
}
withStatic.printMe();