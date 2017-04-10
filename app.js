'use strict';

console.log('Greenlight');

var groceryList = {
  title: 'Dinner',
  items: ['Eggs', 'Flour','Fruit'],
};

var heading = document.getElementById('title');
heading.textContext = groceryList.title;
heading.setAttribute('class', 'cool box button');

var itemsUl = document.getElementById('items');
//create li tag for each string in groceryList.items
//fill that li with the string from the groceryList.items[i]
//put the new li at the end of ingredientsUl using appendChild


var liEl;
for (var i = 0; i < groceryList.items.length; i++){
  console.log('groceryItems.list of i', groceryList.item[i]);
  liEl = document.createElement('li');
  liEl.textContext = groceryList.items[i];
  ingredientsUl.appendChild(liEl); 
};
