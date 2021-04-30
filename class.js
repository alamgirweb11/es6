// simple example of  js class
class firstClass{
          firstFunc(){
              console.log('I am form first Function.');
         }

         funcWithParam(name,age){
             console.log('Your name is '+name+' and your age '+age);
         }
}

// call the class
let obj = new firstClass();
// call the function
obj.firstFunc();
// call the second function
obj.funcWithParam('Abir Ahmed',21);