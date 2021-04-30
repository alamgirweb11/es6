// example of class constructor
// with parameter
class withoutParam{
       constructor(){
           console.log('I am from withoutParam constructor class.');
       }
}
let withoutP = new withoutParam();

// with parameter
class withParam{
     constructor(a,b){
           console.log(a+b);
     }
}
new withParam(10,20);

// with param and another function
class withParamAndFunction{
       constructor(name,age){
            this.personName = name;
            this.personAge = age;
       }

       getPersonInfo(){
            console.log('Person name is '+this.personName+' and age '+this.personAge);
       }
}

let personInfo = new withParamAndFunction('Abir Ahemd',21);
personInfo.getPersonInfo();