// String properties and methods
// wrapper String Object, don't memorize methods
let text = " pete jordan";

let result = text.length;
console.log(result);

//////////////////////////////////
//methods
console.log(text.length);
console.log(text.toUpperCase());
// paima raide is text (-1 shows the last character)
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("p"));
console.log(text.trim().toLocaleUpperCase().startsWith("pete"));

// includes - method
console.log(text.includes("eter"));

// SLICE - method (isima raides is teksto)
console.log(text.slice(0, 2));
// SLICE from the end
console.log(text.slice(-1));

//////////////////////////////////
//object su methods
const person = {
  name: "peter", // property

  greeting() {
    // method
    console.log("hey im pete");
  },
};

console.log(person);

console.log(peron.name);
person.greeting();
//////////////////////////////////

// template literals -ES6+
// backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

const name = "john";
const age = 25;
const sentence = "hey it's" + name + " and he is " + age + " years old";
// template literals easier to write than string concat
// in a template literal to access a variable instead of adding + can say ${}
const value = `hey it's ${name} and he is ${age} years old. and here is some simple math ${
  4 + 4
}`;

console.log(value);

console.log(sentence);

//////////////////////////////////

// array properties and methods

let names = ["john", "bobi", "barry", "olga", "facundo"];

// length - property
console.log(names.length);
// displays the value
console.log(names[names.length - 1]);

// concat

const lastNames = ["peper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse (display names in reverse order)
console.log(allNames.reverse());

// unshift (adds item to array first)
allNames.unshift("susane");
console.log(allNames);

// shift (removes item from array selected)
allNames.shift("susane");
console.log(allNames);

// push (adds item to array the last)
allNames.push("susane");
console.log(allNames);

// pop (removes item from array selected)
allNames.pop("susane");
console.log(allNames);

//SPLICE -  TAKES ITEMS FROM THE ARRAY(mutates original array)

//items remove from the original array
//first number - start index and second - how many items to remove
// and creates a new array - gali ta ifno deploy po to i kita array
const specificNames = allNames.splice(3, 5);
console.log(specificNames);
console.log(allNames);

//////////////////////////////////

// ARRAYS AND FOR LOOP

const names = ["zoe", "susane", "bobik"];
const lastName = "shake";
//push it to a new array
let newArray = [];

// for loop
// set start // stop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  // access name in the array
  console.log(names[i]);
  // assings names values to newArray galima reuse
  newArray.push(names[i]);
}

console.log(names);
// assings names values to newArray galima reuse
console.log(newArray);

//////////////////////////////////

// FUNCTIONS, RETURN, IF, ARRAYS, FOR LOOP
// EXERCISE - CALCULATE TOTALS
// FUNCTION TO RETURN TOTALS AND REASIGN VALUES
// example: array of items how much spent every time on gas,food
// create a function that iterates over those arrays and returns back the total

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

// function block (with funtion we can return the value)
function calculateTotal(arr) {
  let total = 0;
  // set points in the array
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    //console.log(total);
  }
  return total;
}
//  return the values - new variables
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000]);

// console objects
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

//////////////////////////////////
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

// function block (with funtion we can return the value)
function calculateTotal(arr) {
  let total = 0;
  // set points in the array
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    //console.log(total);
  }
  if (total > 100) {
    console.log(`whoa you're spending way too much`);
    // if the condition is true and
    // if you want to break out of the function need to set up a return
    return total;
  }
  console.log(`you are good total is less than 100`);
  // if the first condition is false skaiciuos antra return
  return total;
}
//  return the values - new variables
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000]);

// console objects
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

//////////////////////////////////
