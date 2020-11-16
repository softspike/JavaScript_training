//IMPORTANT!!!! POWERFUL
// MAP
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
 {name: "bob", age:20, position:"developer"},
 {name: "fumi", age:25, position:"designer"},
 {name: "facundo", age:20, position:"the boss"},
 {name: "ximing dou", age:35, position:"the boss"},
];


// returns the same - jeigu original array turi 3 itemus tai map ir return 3. - depends on original array 
// functions by default returns undefined () add parameter (person)
const ages = people.map(function(person){
 //returns all the values
 //return person.age;
 return person.position + 20;
});


const newPeople = people.map(function(person){
 //setting up object
 //modifikuoji original array ir issitrauki ko reikia
return {firstName:person.name.toUpperCase(),
 oldAge:person.age + 20,
};
});

//itterate over array using map, pull out the name value and place in heading one? and display

const names = people.map(function(person){
 // - `` backticks
 return `<h1>${person.name}</h1>`
})

//DOM manipulation
// join - connects arrays
document.body.innerHTML = names.join("");

//console.log(names);

//--------------------------------------------------//
//FILTER
//does return a new array
//can manipulate the size of new array!!! (map cant)
//returns based on condition

const people1 = [
 {name: "bob", age:20, position:"senior developer"},
 {name: "fumi", age:25, position:"designer"},
 {name: "facundo", age:20, position:"the boss"},
 {name: "ximing dou", age:35, position:"the boss"},
];

const youngPeople = people1.filter(function(person){
 //filters out the array
 return person.age <=25;
});

const developers = people1.filter(function(person){
 //senior developer = value
return person.position === 'senior developer';
});

//console.log(developers);

//--------------------------------------------------//

//FIND
// returns single instance -(in this case object)!!!
// returns first match, if not match undefined
// great for getting unique value

const people2 = [
 {name: "bob", age:20, position:"senior developer", id:1},
 {name: "fumi", age:25, position:"designer",  id:3},
 {name: "facundo", age:20, position:"the boss",  id:3},
 {name: "ximing dou", age:35, position:"the boss", id:4},
];

const names1 =['bobik', 'fumi', 'facundo'];

// console.log(
//  names1.find(function(name){
//  return name === 'bobik';
// })
// );




const person = people2.find(function(person){
 //based on condition return
 //fumi - first found
 //facundo
 return person.id === 3;
});




// console.log(person.name);

//same as find, but using filter
const person2 = people2.filter(function(person){
 return person.id === 3;
});

// console.log(person2[0]);

//--------------------------------------------------//

//REDUCE method - more challenging (can replace map & filter)!
// iterates over array, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - represents current iteration/value

const people3 = [
 {name: "bob", age:20, position:"senior developer", id:1, salary: 200},
 {name: "fumi", age:25, position:"designer",  id:2, salary: 300},
 {name: "facundo", age:20, position:"the boss",  id:3, salary: 500},
 {name: "ximing dou", age:35, position:"the boss", id:4, salary: 500},
];

//6:48:02 time
// return number - 0
// always return acc - accumulator
const total = people3.reduce(function(acc,currItem){
 //console.log(`total ${acc}`);
 //console.log(`current money: ${currItem.salary}`);
 acc += currItem.salary;
 return acc;
},0);

//console.log(total);

//--------------------------------------------------//

//MATH
// standard built-in objects - always available
//rounding up, rounding down

const number = 4.56789;
// Math - global object
// floor - rounds it down
const result = Math.floor(number);

//console.log(result);

const number1 = 4.56789;
const result1 = Math.floor(8.99999);

//console.log(result1);

const number2 = 4.12222;
const result2 = Math.ceil(number);

//console.log(result2);

const number3 = 4.12222;
const result3 = Math.sqrt(number3);

//console.log(result3);

//const result4 = Math.PI;
//const result4 = Math.min(4,5,6,7,9);
//const result4 = Math.max(100, 200, 1000);

//console.log(result4);

const result5 = Math.random()*10;

//console.log(result5);

//removes decimals
//0 to 9
const result6 = Math.floor(Math.random()*10);

//console.log(result6);
//0 to 10
const result7 = Math.floor(Math.random()*10+1);

//console.log(result7);

//--------------------------------------------------//

//DATE
//reikia define jog return
// indexes 0 to 11
const months = [
 'january',
 'february',
 'march',
 'april',
 'may',
 'june',
 'july',
 'august',
 'september',
 'october',
 'november',
 'december',
];

const days = [
 'monday',
 'tuesday',
 'wednesday',
 'thursday',
 'friday',
 'saturday',
 'sunday',
];
 

//shows actual date
//const date = new Date();
//console.log(date);

// rodo actual month
//galima change date format new Date('1/12/2004')
const date = new Date();
const month = date.getMonth();
console.log(months[month]);

//day ir date
const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());

console.log(date.getFullYear());

//tuesday, 16, november, 2020 
const sentence = `${days[day]}, ${date.getDate()}, ${months[month]}, ${date.getFullYear()}`;
console.log(sentence);

//displays on the browser
document.body.innerHTML = sentence;