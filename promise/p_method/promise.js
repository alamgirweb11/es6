let exmaple = true;
let callPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(exmaple){
             resolve("It's Completed.");
        }else{
             reject("It's Incompleted.");
        }
}, 3*1000);
});

callPromise 
.then(() => (example))
.catch((err) => {})
.finally(() => {
     console.log(callPromise);
});

