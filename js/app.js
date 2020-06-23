'use strict;';
console.log ('app.js is connected.');
//review standard built-in properties
//object literals

//can store values that can be pulled out. these are called key value pairs
//known as object literal
/* var person = {
  firstName: 'Craig',
  lastName: 'Barkley',
  getAge: someFunctionCalc(),
  newKey: 'variableName'
};

person.someFunctionCalc(); */

//contextual 'this' tells the function that the education is in the key

/* var education = ['a', 'b','c','d','e'];

var personOne = {
  name: 'Craig Barkley',
  age: 47,
  computerScientist: true,
  education: ['JJC','UI','SIUC', 'SWIC','Kirkwood'],

  code: function(){
    console.log('I am coding now...');
    return this.education[Math.floor(Math.random() * this.education.length)];
  }
}; */


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals

var petOne = {
  name:'Tom',
  breed:'Tabby',
  age:0,
  imageName: 'tomCat',
  interest: ['play with string', 'eat lasagna', 'catNip'],
  isGoodKids: true,
  isGoodDogs: false,
  isGoodAnimal: true,
  setAge: function(){
    this.age = randomAge(3,12)+ ' months';
  }
};
petOne.setAge();

function randomAge (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//setup property outside the object after it has been created
petOne.isFixed = true;

//Create DOM elements

var parentElement = document.getElementById('kittenProfiles');

//inside the element article, h2, p, ul, li, interests, image

var article = document.createElement('article');
//console.log(article);
parentElement.appendChild(article);

//h2
var h2 = document.createElement('h2');
h2.textContent = petOne.name;
article.appendChild(h2);

//paragraph
var petPara = document.createElement('p');
petPara.textContent = 'Cats are adorable. This cat is ' + petOne.age + ' old.';
article.appendChild(petPara);

//create ul
var petUL = document.createElement('ul');
article.appendChild(petUL);

for(var i = 0; i < petOne.interest.length; i++){
  var petLi = document.createElement('li');
  petLi.textContent = petOne.interest[i];
  petUL.appendChild(petLi);
}








