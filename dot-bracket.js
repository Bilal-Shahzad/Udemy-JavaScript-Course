var car = [
    make: 'Honda',
    color: 'silver',
    mpg: '34',
    galllons: '12',
    engine: '1',
    'origin year: 2003' 

]

// bracket notation
car ['origin year'] = 2003

// dot notation 
car.origin year - 1984,


//The dot notation can't access multi-word properties, properties that start with a digit and properties that include special characters ( $ and _ are allowed). So, when properties names are known and simple, we should use dot notation. If we need something more complex, we can then switch to using square brackets.

Examples:

let kid = {
   age: '9',
   name: 'Albert',
   "hair color": 'black',
};

kid.age // output: 9
kid.name // output: 'Albert'
kid.hair color // would give a syntax Error because JS engine thinks we are trying to access kid.hair property which doesn't exist.



//Dot notation doesn't allow you to use variables while square bracket notation does.

let kid = {
    age: '9',
    name: 'Albert',
    "hair color": 'black',
 };
 let property = 'age'
 undefined
 kid.property 
 undefined
 kid[property]
 "9"