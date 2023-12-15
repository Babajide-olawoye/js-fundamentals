
How this concept applies in JS.
What the difference is between declaring a function and calling it
Bonus: give examples for each explanation



# Challenge 4

### What are First Class functions ?

The functions that are called first class functions/first class citizen function are the ones in programming languages that have more capabilities than function/method in other languages like Java/C#.
Example:
1. You can assign a function to a variable the same way you can with a string, number or object.
- var strObject = "hello"
- var funObj = () => {return "hello"}
2. It can be stored in other data structures like arrays
- const myArray = ["23", func(), 5]
3. It can be passed in as a parameter 
- function func(()=>{}) {}

### What those these concept refer to in JavaScript ?

Functions in JavaScript are considered first class function because of it capabilities. They were designed to have more capabilities than fnction/method in programming languages like Java. First class functions allowed for increased flexibility in how functions can be used within the language.

###  What is the difference between declaring a function and calling it ?

Declaring a function is basically defining what a function will do. Whereas calling a function is executing the function we declared.
Example:
- Declaring: const func = () =>{ console.log("Declaring function")}; Overhere we defined the function
- Calling: func(); And here we called the function we defined above. So this prints out "Declaring function" in console

