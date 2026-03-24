# 05 - Function

***Fun fact `console.log()` is also a function..***

---

```javascript
function greet(name) { 
    // this is called body (of the function)
    console.log(`Hello ${name}!`);
};

greet('John'); 
```

So Here you can see a example function to great someone. Called John.

The word name in the double parenthesis () 
<small>damn this is hard to spell..</small> is used to add parameters to our function. So like you see when we do `greet('John')` we say that the name parameter gets a string John (this is called argument).
This is used to create variables that are not used in any code before to our function without declaring them global.

***

You can seperate parameters with adding a comma to add more.

```javascript
function greet(name, age) {
    console.log(`Hello ${name}! I didn't knew you were ${age} years old WOW.`);
};

greet('John', 5)

Output: >> Hello John! I didn't knew you were 5 years old WOW.

```
***