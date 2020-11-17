//DOM
// select elements
// traverse DOM
// insert/remove elements
// apply styling
// add/remove CSS classes

//dom tree -every element is a node

//--------------------------------------------------//

// similar to css



// select the element or group of elements you want to affect
// decide the effect you want to apply to the selection

//many different ways

document.body.style.backgroundColor = 'green';
//text color
document.body.style.color = 'yellow';
//select button, document by ID, looking for style = red;
document.getElementById('btn').style.color = 'red';

// assign to a variable (to have an access to a node object)
const element = document.getElementById('element');
//do something

//use the method, select the element and do something..style.color
document.querySelector('element'); //do something;

//global window object
//console.log(window);

// returns a node object or a node list - which is an arraylike object
const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

//console.log(btn);
//console.log(name);
//console.log(css);

// window object - a way for browser to give us options to work with the browser
// window object = browser api

// document

//--------------------------------------------------//
// MOST POPULAR
//ById
// select the element or group of elements we want
// decide the effect we want to apply to the selection

//getElementById('element')

// title - argument
const h1 = document.getElementById('title');
h1.style.color = 'red';


//assign to a variable
//const btn = document.getElementById('btn');
//btn.style.backgroundColor = 'blue';
//btn.style.color = 'white';



//not assign to a variable
document.getElementById('btn').style.backgroundColor = 'blue';

document.getElementById('btn').style.color = "white";

//--------------------------------------------------//

// select the element or group of elements you want
// decide the effect we want to apply to the selection
//ByTagName

//getElementsByTagName('tagname'); - returns node-list = array-like object;
//index, lenght property but not array methods

//method - .getElementsByTagName
const headings = document.getElementsByTagName('h2');
//headings-node list
headings[0].style.color ='red';
//console.log(headings.length);


//--------------------------------------------------//
//change - item[2] color
const items = document.getElementsByTagName('li');

//user .forEach - method
// items.forEach(function(item){
// console.log(item);
// });
//use INDEX AND LENGTH to MANIPULATE items
items[2].style.color ='orange';
//?
const betterItems = [...items];

betterItems.forEach(function(item){
// console.log(item);
//console.log(betterItems);
}); 
//--------------------------------------------------//

//ByClassName (method)

//document.getElementsByClassName('classname');

const listItems = document.getElementsByClassName('special');
listItems[2].style.color ='red';
//console.log(listItems);
//--------------------------------------------------//

//querySelector -selects single element
//querySelectorAll - selects the whole list
// select the element or group of elements you want
// decide the effect we want to apply to the selection

//can use getElementById or querySelector - same

//to get Id - #
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';
//to get class - .
const item = document.querySelector('.special');

//console.log(item);
//--------------------------------------------------//
const lastItem = document.querySelector('li:last-child');
//console.log(lastItem);
//--------------------------------------------------//
const list = document.querySelectorAll('.special');

list.forEach(function(item1){
//console.log(item1);
item1.style.color = 'pink';
});


//--------------------------------------------------//
//traverse the DOM tree 


// select the element or group of elements you want
// decide the effect we want to apply to the selection

//childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

//access child nodes
const result = document.querySelector('#result');
const allChildren = result.childNodes;
//console.log(allChildren);

const children = result.children;
//console.log(children);

//console.log(result.firstChild);
//console.log(result.lastChild);

//parentElement
//traverse
//h2 and h3 - red 
const heading = document.querySelector('h2');
const parent = heading.parentElement;
parent.style.color = 'red';
//--------------------------------------------------//

// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
//next 2x not to be on a white space
const second = (first.nextSibling.nextSibling.style.color = 'red')
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
//--------------------------------------------------//


//easier way to grab the element


//previousElementSibling
// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
// const last = document.querySelector('#last');
//--------------------------------------------------//


//nodeValue (a bit challenging)

const value = item.firstChild.nodeValue;
//access text value
console.log(item.childNodes);

//--------------------------------------------------//


//textContent (easier)
//access text value
const item = document.getElementById('special');
const easyValue = item.textContent;
console.log(easyValue);

//--------------------------------------------------//


// getAttribute();
// setAttribute();


//get values of attributes
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
//console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const links = document.querySelectorAll('.first');
console.log(links);

//8:10:00

//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//

//8:58:23
//--------------------------------------------------//