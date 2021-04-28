// simple array declare
let names = ['Rahat','Rajon','Rayan'];
console.log(names);  // return all names
// print only Rajon
 console.log(names[1]);

 let alphabet =  Array('A','B','C','D');
 console.log(alphabet);
//  print only C
console.log(alphabet[2]);

// print names on by one using for of
for(let name of names){
     console.log(name);
}

// multi-dimentional array
let multiArray = [
        ['Science','Arts','Commerce'],
       ['Bangla','English','Social Science'],
       ['Mathe','Physics','Chemistry']
];
// print science and chemestry
console.log(multiArray[0][0]+' and ' +multiArray[2][2]);

// array destructing assignment
let countries = ['Bangladesh', 'Chaina', 'America'];
// destructing
let [a,b,c] = countries;
// print China
console.log(b);

function getItems() {
    return null;
}

let [d = 10, e = 20] = getItems() || [];

console.log(d); // 10
console.log(e); // 20

function getProfile() {
    return [
        'John',
        ['Red', 'Green', 'Blue']
    ];
}

let [name,
  [color1,
   color2,
   color3
  ] 
]  = getProfile();
console.log(name);