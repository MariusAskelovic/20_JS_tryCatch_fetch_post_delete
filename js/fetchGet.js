'use strict';
console.log('fetchGet.js file was loaded');

const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

let todosFirst15 = [];

fetch(urlTodos)
  .then((resp) => resp.json())
  .then((todosArr) => {
    // console.log('gavom todosArr ===', todosArr);
    todosFirst15 = todosArr.filter((todoObj) => todoObj.id < 15);
    console.log('todosFirst15 ===', todosFirst15);
    return todosFirst15;
  })

  .catch((error) => console.log('todosArr ===', todosArr));

console.log('todosFirst15 ===', todosFirst15);
