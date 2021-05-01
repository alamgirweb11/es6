// super keyword use for directly call the parent class property and method in child class
// example of super keyword
class firstClass{
       func1(){
           console.log("I am from func1 method of parent class.");
       }
}

class secondClass extends firstClass{
    firtCFunc() {
        super.func1();
    }   
}

let obj = new secondClass('Abir Ahmed', 21, 'Dhaka');
obj.firtCFunc();


