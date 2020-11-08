// REFERENCE VS VALUE
//PRIMITIVE DATA TYPES - STRING, NUMBER, SYMBOL, BOOLEAN, UNDEFINED, NULL
//OBJECTS - ARRAYS, FUNCTIONS, OBJECT
// TYPEOF

//WHEN ASSIGNING PRIMITIVE DATA VALUE TO A VARIABLE ANY CHANGES ARE MADE DIRECTLY TO THAT VALUE, WITHOUT AFFECTING ORIGINAL VALUE. (galutine versija bus veliausias variable)

// WHEN ASSIGNING NON-PRIMITIVE DATA TYPE VALUE TO A VARIABLE IS DONE BY REFERENCE SO ANY CHANGES WILL AFFECT ALL THE REFERENCES. (variable pasikeicia kai keiciamas kodas pvz objecte)

number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);

//object
let person = { name: "bobddd" };
let person2 = person;
// viska sugadina
person.name = "kpop";
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
//////////////////////////////

// NULL AND UNDEFINED -BOTH REPRESENT 'NO VALUE'

//UNDEFINED - 'JS CAN NOT FIND VALUE FOR THIS'
//EXAMPLES:
// -VARIABLE WITHOUT VALUE
// -MISSING FUNCTION ARGUMENTS
// -MISSING OBJECT PROPERTIES

//NULL - DEVELOPER SETS THE VALUE

let number = 20 + null; // 20 + 0;
console.log(number);
let number2 = 20 + undefined; // not a number NaN
console.log(number2);
//////////////////////////////

// TRUTHY AND FALSY values
// falsy value -"empty string", '',``,0,-0,NaN, FALSE. NULL, UNDEFINED

const bool1 = true;
const bool2 = 2 > 1;

if (bool1) {
  console.log(`hey it works`);
}

if (bool2) {
  console.log(`hey it also works`);
}
//////////////////////////////
const bool1 = true;
const bool2 = 2 > 1;

const text = "aaa"; // empty string has a falsy value
if (text) {
  console.log(`hey the value truthy`);
} else {
  console.log(`hey the value falsy`);
}
//////////////////////////////

// unary operator - typeof

let text1 = "some text";
console.log(typeof text1); // operand
//binary operator(2 operators) -assignment
let number = 3;
let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)

const value = 1 < 0;

//check if the condition is true or false (unary operator -replaces if and else statement on below)
value ? console.log("value is true") : console.log("value is false");

// if (value) {
//   console.log(`value is true`);
// } else {
//   console.log(`value is false`);
// }
//////////////////////////////

//GLOBAL SCOPE VS LOCAL SCOPE
//ANY VARIABLE OUTSIDE CODE BLOCK {} IS SAID TO BE IN GLOBAL SCOPE
//CAN BE ACCESS ANYYWHERE IN THE PROGRAM
//GOTCHAS : NAME COLLISIONS, MODIFY BY MISTAKE

//GLOBAL SCOPE
let name = "bobik";
name = "facundo";

function calculate() {
  //some other code...
  console.log(name);
  name = "orange";
  // galima function within a function ir galima modify the global variable
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
}
//call is function
calculate();

if (true) {
  //some other code...
  console.log(name);
  name = "pants";
}

console.log(`my name is ${name} and I'm awesome`);
//////////////////////////////

//LOCAL SCOPE
// can not be access from outside code blocks
// if - NOT VAR

//LOCAL SCOPE
let name = "bobik";

// galima naudoti tuos pacius variable names, nes local scope
function calculate() {
  const name = "john";
  const age = 25;
  // code goes here become global variable, nes nera key words pries (const, let)
  becomesGlobal = "global variable";
}

//call is function
calculate();
console.log(becomesGlobal);

// //cant access nes local
// console.log(age);
if (true) {
  const name = "john";
}

console.log(`my name is ${name} and I'm awesome`);

//////////////////////////////
//VARIABLE LOOKUP
// {} - CODE BLOCK

const globalNumber = 5;

//javascript starts with a local scope if its there naudoja, jei ne. js eina i global scope
function add(num1, num2) {
  // 27, nes pirma i local scope (add funcija declared)
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
//////////////////////////////
//CALLBACK FUNCTIONS, HIGHER ORDER FUNCTIONS, FUNCTIONS AS FIRST CLASS OBJECTS/CITIZENS

//FUNCTIONS ARE FIRST CLASS OBJECTS - STORED IN A VARIABLE (EXPRESSION), PASSED AS AN ARGUMENT TO ANOTHER FUNCTION, RETURN FROM THE FUNCTION (CLOSURE) -DONT COVER NOW (BIG TOPIC)

//HIGHER ORDER FUNCTION (THE FUNCTION THAT RECEIVES THE FUNCTION - HIGHER ORDER, TA KURI PASS THE FUNCTION - CALLBACK FUNCTION) - ACCEPTS ANOTHER FUNCTION AS AN ARGUMENT OR RETURNS ANOTHER FUNCTION AS A RESULT

// CALLBACK FUNCTION - PASSED TO A ANOTHER FUNCTION AS AN ARGUMENT AND EXECUTED INSIDE THAT FUNCTION

//trys functions morninf, afternoon,evening pasidarys higher order viena function

// acts like a callback function
function morning() {
  console.log("good morning bob");
  return "good morning bob";
}

//universal -higher order function
function greet(name, cb) {
  //stands for callback - pasina 'good morning bob'
  cb(morning);
  const myName = "john";
  //galima ir taip
  //console.log(`${cb(name)}, my name is ${myName}`);
  console.log(`${name}, my name is ${myName}`);
}
greet("bobik", morning);
greet("facundo", morning);

// // sort of hard code function
// function greetMorning(name) {
//   const myName = "john";
//   console.log(`good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`good afternoon ${name}, my name is ${myName}`);
// }
// greetMorning("bobik");
// greetAfternoon("facundo");
//////////////////////////////

// POWERFULL ARRAY METHODS
// forEach/unclear, map/most useful, filter, find, reduce
// ITERATE OVER ARRAY - NO FOR LOOP REQUIRED
// ACCEPT CALLBACK FUNCTION AS AN ARGUMENT, CALLS CALLBACK AGAINST EACH ITEM IN A ARRAY. REFERENCE ITEM IN THE CALLBACK PARAMETER.

const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//objects in the array
const people = [
  // name - property
  // every item is an object, object has properties
  { name: "bobik", age: 20, position: "developer" },
  { name: "fumi", age: 25, position: "designer" },
  { name: "facundo", age: 30, position: "the boss" },
];

function showPerson(person) {
  //access person.position + call string method toUpperCase()
  console.log(person.position.toUpperCase());
}

// forEach
//does not return new array
//people.forEach(showPerson);

//invoke the function
//people.forEach(showPerson);

// referece each item in the array
//not invoking this function just passing reference - passing a call back function by setting an unnanumous function and still using (item)-parameter
// for each -method to allows iterate over the array
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
//////////////////////////////
