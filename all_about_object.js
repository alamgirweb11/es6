// simple object
let simpleOb = {Name:'Abir',email:'abir@gmail.com'};
// call the simple object
console.log(simpleOb.Name);
//second method to call the object property
console.log(simpleOb['email']);

// nested object
let persons = {

             person1:{
                  name:'Ahad',
                  age: 20,
                  email: 'ahad@gmail.com'
             },

             person2:{
                name:'Rashed',
                age: 25,
                email: 'rashed@gmail.com' 
             },

             person3:{
                      name: 'Ratul',

                      otherInfo:{
                                age: 30,
                                email: 'ratul@gmail.com',

                                current_address: {
                                            address: 'dhaka',

                                            permanent_address:{
                                                address: 'Rajshahi'
                                            }
                               }
                       }
             }
}

// call the nested object
// person1 info
console.log(persons.person1); 
//person3 name
console.log(persons.person3.name);
//person3 email
console.log(persons.person3.otherInfo.email);
//person3 current_address
console.log(persons.person3.otherInfo.current_address.address);
//person3 permanent_address
console.log(persons.person3.otherInfo.current_address.permanent_address.address);