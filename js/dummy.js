'use strict';
console.log('dummy.js file was loaded');

const urlDummyPosts = 'https://dummyjson.com/posts?limit=10';
fetch(urlDummyPosts)
  .then((resp) => resp.json())
  .then((jsonObj) => {
    console.log('jsonObj ===', jsonObj.posts);
  })
  .catch((error) => {
    console.log(error);
  });
