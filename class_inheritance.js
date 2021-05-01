// class inheritance
class parent{
     fatherName(){
          console.log("Rubayed Khan");
     }
}
class child extends parent{
         childName(){
              console.log("Rashed Khan");
         }
}

let inheritParent = new child();
inheritParent.fatherName();
inheritParent.childName();


// exmaple 2 
class foo{
     func1 (a,b){
         console.log(a+b);
     }
}

class bar extends foo{
    //  override parent class method
    func1(a,b,c){
        let  d = a+b-c;
        console.log(d);
    }

    // create new method in child class
    childFunc(){
         console.log("I am child Class.");
    }
}

// first call func1 method from parent class 
let pobj = new foo();
pobj.func1(10,20);

// call the same mehod from child class 
let cobj = new bar();
cobj.func1(10,10,10);
// call the child class own method
cobj.childFunc();