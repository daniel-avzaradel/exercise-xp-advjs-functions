// EXERCISE 1 : SUM //~
// Create a one line function that receives two numbers as parameters and returns the sum.

let sum = (a,b) => a + b;
console.log(sum(32,7));


// EXERCISE 2 : CLOSURE
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
var addToTen = addTo(10);  
addToTen(3) // OUTPUT addToTen(3) == 13;


// EXERCISE 3: CURRYING
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // output == 31

// EXERCISE 4: CURRYING
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5);
console.log(add5(10))
add5(12) // output add5(12) == 17


// EXERCISE 5: COMPOSING
// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10)) // output 16