//8:58:23
//--------------------------------------------------//
//Events (to understand principles behind events)

// select elements
// addEventListener()
// what event, what to do


const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

//raso css class in html ir call is ten
function changeColors(){
  let hasClass = heading.classList.contains('red');
  // is it true or false, check
  if (hasClass) {
    heading.classList.remove('red');
  }
  else {
    heading.classList.add('red');
  }
}

//logic the moment we click and unclick the button
// btn.addEventListener('click',function(){
// heading.classList.add('red');

// });

btn.addEventListener('click', changeColors);

//--------------------------------------------------//

// MOUSE EVENTS
// click fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

// eventListener + unanimous function ()
btn.addEventListener('click', function(){
  console.log('you clicked me');
});

btn.addEventListener('mousedown', function(){
  console.log('down');
});

btn.addEventListener('mouseup', function(){
  console.log('up');
});

//highlights h1
heading.addEventListener('mouseenter', function(){
  heading.classList.add('green');
});

//unhighlights h1
heading.addEventListener('mouseleave', function(){
  heading.classList.remove('green');
});

//--------------------------------------------------//

// KEY EVENTS

//text box
const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function(){
  console.log('you pressed a key');
});
//--------------------------------------------------//
//holding when the actual key is pressed
nameInput.addEventListener('keydown', function(){
  console.log('you pressed a key');
});
//--------------------------------------------------//
//event start when realsing the key and displayed in console
nameInput.addEventListener('keyup', function(){
  console.log(nameInput.value);
  // console.dir(nameInput);
});
//--------------------------------------------------//

// EVENT OBJECT

// event object argument abbreviation: e,evt
// info about triggered event
// event.type
// event.currentTarget
// preventDefault() - prevents default behaviour


const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

// callback function //argument (event) for reference
heading.addEventListener('click', function(event){
  console.log(event.currentTarget);
  // click
// heading.classList.add('green');
});

// callback function (button to .classList green)
btn.addEventListener('click', function(event){
  event.currentTarget.classList.add('green');
  console.log(event.type);
  // click
// heading.classList.add('green');
});
//another way to write function

function someFunc(e){
  // method ();
e.preventDefault();
}

link.addEventListener('click', someFunc);

//--------------------------------------------------//

// EVENTS
// currentTarget - always refers to the element to which the event handler has been attached to 
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');


// on click button text changes style
// looping over all .btn class
btns.forEach(function(btn){
  //listening to click
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';


    // targets the element on which action occur -so the nested button splits style on click
    console.log('target',e.target);
    console.log('currentTarget', e.currentTarget);
    e.target.style.color = 'green';
  })
})

//--------------------------------------------------//

// EVENTS
// allows select dynamic elements - select elements added with javascript!!!
// event propogation - order the events are fired
// event bubbling!!! - clicked element first then bubbles up -- default
// event capturing!!! - fires at the root and fires until reaches target (nera)

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(event){
  console.log('current target', event.currentTarget);
  console.log('target', event.currentTarget);
  //--------------------------------------------------//
  if(event.target.classList.contains('link')){
    console.log('you clicked on the link');
  }
}

function stopPropagation(e) {
  console.log('you clicked on list');
  e.stopPropagation();
}

list.addEventListener('click', stopPropagation);
//list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
//--------------------------------------------------//

// EVENTS
// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up default

const container1 = document.querySelector('.container1');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading1');
//console.log(heading);

function sayHello(){
  console.log('hello there');
}

btn.addEventListener('click', function(){
  // button click creates a new element
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside the container`;
  container1.appendChild(element);
});

// event to bubble so target the actual container1
container1.addEventListener('click', function(e){})
if(e.target.classList.contains('heading')){
  console.log('hello there');
}

heading.addEventListener('click', sayHello);

//--------------------------------------------------//

// EVENT FORM SUBMISSION

// listen to submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
})

//--------------------------------------------------//

// web storage API - provided by browser
// session storage, local storage - is going to keep the info between opening and closing browser (e-shop cart example (refresh page, items still in the basket))
// setItem, getItem, removeItem, clear - does not keep the info (close browser, no data)

// setItem, getItem
//--------------------------------------------------//
// localStorage.setItem('name', 'facundo');
sessionStorage.setItem('name', 'facundo');
// 'key', 'value' 
localStorage.setItem('name', 'facundo');
localStorage.setItem('friend', 'bobik');
localStorage.setItem('job', "developer");
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name');
console.log(name);
//--------------------------------------------------//

// removeItem, clear
//--------------------------------------------------//

localStorage.removeItem('name');
// check if name removed
const anotherName = localStorage.getItem('name');
console.log(anotherName);
// all data cleared
localStorage.clear();
//--------------------------------------------------//
// JSON.stringify(),JSON.parse()
//--------------------------------------------------//
const friends = ['facundo', 'bobik', 'bob'];

// storing friends as array
localStorage.setItem('friends', JSON.stringify(friends));

// accessing the value
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);
//--------------------------------------------------//
// check if have values in local storage; (actual no, so just apply check and add later on)
let fruits;

if(localStorage.getItem('fruits')){

  fruits=JSON.parse(localStorage.getItem('fruits'));
}
else{
  
  fruits=[];
}

console.log(fruits);
// adding items to local storage
fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits',JSON.stringify(fruits));