// document.write("hello world");
// alert("hello world");
// console.log("hello world");

document.write("hello world");
alert("hello people");
console.log("hello all");

// I woke up early today.
// statements - sets of instructions
// comments - shortcut Command + /

// this is a console statement
console.log("hello log");
console.log("hello ppl");
console.log("hello bobik");
console.log("hello susan");
console.log("hello lg");
document.write("hello bobik");

// variable - most basic building block
// variables - allows to store, access, modify === value
// declare, assigment operator, assign value

// = d defines name = d name - variable; d - value
let name = "d";

//assing value later, modify existing
//variables
let address, zip, state;
//value
address = "101 main street";
zip = "2190";
state = "CA";
name = "burrito";
console.log(address, zip, state);
console.log(name);

// can contain digits, letters, underscore, $
let random123_$ = "random";
console.log(random123_$);
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive -fullname vs Fullname

// camelCase or underscore
let fullname = "random1";
console.log(fullname);

///////////////////////////////////

// LET VS CONST VS VAR

// using var (old version)
var value = "some value";

// using let (new version for var)
let name = "john";

// using const (CONSTANT) - can't re-assign
const lastName = "jordan";

console.log(value);
console.log(name);
console.log(lastName);

///////////////////////////////////

// "" or ''
const name = "john's are awesome burritos";

//////////////////////////////////

// string concatination - combine string values
const name = "john";
const lastName1 = "shake and bake";

let fullName = "hello there" + name + "nice day" + lastName1;

console.log("hello there" + name + "nice day" + lastName1);
// `` - backticks (template strings) easier option.

const website = "google";
const url = "https://www." + website + ".com";
console.log(url);

//////////////////////////////////

// numbers
// loosely typed = don't declare type

// const number = 34;
// let pants = 2.455;
pants = "are great";
const number2 = 2.456;

console.log(number);
console.log(number2);

comment out

+=, -=, /=, *=, ++, --, % -operators

//////////////////////////////////
// sudeda = 60
let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++; // adds 1
console.log(number);
//////////////////////////////////

const slices = 10;
const children = 3;
const amount = slices % children;
console.log(amount);

comment out

data types

const text= 'some text'

// number
const number = 45;

// boolean
let value1 = true;
let value2 = false;

//  null
const result= null;

// undefined
let name;

console.log(typeof text);
console.log(typeof 3);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);

comment out

arrays, functions and objects
arrays - [], 0 index based

const friend1 = "zose";
const friend2 = "zose";
const friend3 = "zose";
const friend4 = "zose";
// array - store variables in the array
const friends = ["john", "kolis", "bob", "bobik", 45, undefined, null];

let bestFriend = friends[2];
// add a variable to array
friends[4] = "ole";
// arrays - [], 0 index based
console.log(friends);
console.log(bestFriend);

comment out

functions - declare, invoke (functions reduce redundancy)

////////////////////////////////

TASK
// great bob
hello(friends[0]);
// greet zoe
hello(friends[1]);
// great bobik
hello(friends[2]);
params -when declare/define

// declare function
(name) = params
function greet(name) {
  // logic
  // function declaration
  console.log("hello there " + name);

}
// invoke
greet("bob");
greet("ole");
greet("bobik");

////////////////////////////////

// 1 inch 2.54cm

const wallHeight = 80;

function calculate(value) {
  console.log("the value in cm is: " + (value * 2.54 + "cm"));
}

const width = calculate();
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

////////////////////////////////

// function definitation declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// function expression (const add) store the value (necessary nes return)
const add = function addValues(num1, num2) {
  return num1 + num2;
};
//const thirdValue = add(5, 6);
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);

const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

////////////////////////////////

// arrays, functions and objects
// objects - key/value pairs methods
// dot notation

// objects
const person = {
  // properties
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["zose", "susan", "pete"],
  // METHOD
  //if a property value has a value its called a method
  // access by using the property name (greeting). In the object setting, function is called a method
  // acces the function using propety (greeting) so the name is not neccessary (sayHello)
  greeting: function sayHello() {
    console.log("hello my name is john");
  },
};
// access using . (dot notation)
const age = person.age;
console.log(age);
// change name
person.name = "bob";

// call person for the object
console.log(person.name);
console.log(person.siblings[0]);

// invoke the method
person.greeting();

////////////////////////////////

// Conditional statements
//switch // else if // all if
// Comparison operators
// >, <, >=, <=, ==, ===, !=, !===
// else if and !(not)
// == checks only value
// === checks value and type

// with in () - write condition, {} - write the code to execute if the condition is met;
if (2 > 1) {
  console.log("hello world");
}

// or

const value = true;

if (value) {
  console.log("hello world");
}

// or

const value1 = 2 > 1;
const value2 = 1 > 2;

if (value2) {
  console.log("hello world");
} else {
  console.log("hello people");
}

/////////////

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if (num1 > num2) {
  console.log("first bigger than second");
} else if (result) {
  console.log("first number equal to to a second");
} else {
  console.log("second > first");
}

////

const value3 = false;
// if the value is not true ! - makes false
if (!value3) {
  console.log("value is false");
}
////
// == checks only value
// === checks value and type
const num5 = 2;
const num7 = 10;

const value5 = num5 != num7; //true
const value0 = num5 !== num7; //true
console.log(value5);
console.log(value0);
////

// logical operators
// (|| - OR),(&& - and), !

const name = "bob";
const age = 24;

// or - if one is correct prints true
if (name === "bob" || age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}

/////////////

// Switch statements (just another way to write (replace) else if conditions)
// dice values: 1- 6

const dice = 1;
switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
    default;
    console.log('you didnt roll the dice');
}

const dice = 6;

// else if
if (dice === 1) {
  console.log("you have got one");
} else if (dice === 2) {
  console.log("you got there");
} else {
  console.log("you didnt role the dice");
}

const dice = 3;
//all if
if (dice === 1) {
  console.log("you have got one");
}
if (dice === 2) {
  console.log("you got two");
}
if (dice < 1 || dice > 6) {
  console.log("you didnt role the dice");
}

/////////////

// Loops
// repeatedly run a block of code while condition is true
// while loop
// TURN OFF AUTOSAVE

// const - fixed value (need to use let)
//

let amount = 10;

// () -condition
while (amount > 0) {
  console.log("I have" + amount + "dollars and I'm going to the mall");
  // break
  amount--;
}

// do while

let money = 0;

do {
  console.log("you have" + money + "dollars");
  money++;
} while (money < 10);

// for loop
//increase on every iteration - the repetition of a process
let i;
for (i = 0; i < 10; i++) {
  console.log("and the number is " + i);
}
//decrease on every iteration
for (let number = 11; number >= 0; number--) {
  console.log("and the number is " + i);
}
