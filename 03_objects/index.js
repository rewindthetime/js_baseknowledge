/*
-----------------
-----Objects-----
-----------------

Dot notation is easier but they are some situation where you need bracket notation

*/


let person = {
    name: 'John',
    age: 5
}
console.log(person)


// Dot Notation
person.name = 'Liam';

console.log(person.name)

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary' // you also can type 'name' but this is more dynamicle

console.log(person)
