/* 
-----------------------
-----If conditions-----
-----------------------

if you want to enter more conditions do 
if (condition = blabla && condition2 = blablabla) blabl..

*/

let greeting = true;
let hour = 10;

if (hour < 18 && greeting == true) { // if its less than 6pm it says good day 
    greeting = "Good Day";
} else if (hour > 20) {
    greeting = "Good Evening";
} else {
    greeting = "Good night";
}

console.log(greeting)


