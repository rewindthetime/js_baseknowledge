/*

---------------
-----Loops-----
---------------

ugh i know it looks so complicated..

if you want to stop a loop just enter break 
if (i === 3) break;

skips this run
if (i === 1) continue;


*/

for (let i = 0; i < 5; i++) { 
  console.log(i);
}
/*

let i = 0 
this is our starting value

i < 5
this is our condition (runs until it turns false then it stops.)

i++
++ adds 1 to i after the body ended

*/


// while loops
let i = 0;

while (a < 5) {
    console.log(a);
    a++;
}




// this runs always 1 time even if its true
let b = 10

do {
    console.log(b);
    b++;
} while (i < 5);



// tbh idk what this is called..
const numbers = [1, 2, 3];

for (const number of numbers) {
    console.log(number)
}


const user = { name: 'John', age: 5 };

for (const key in user) {
    console.log(key, user[key]);
}