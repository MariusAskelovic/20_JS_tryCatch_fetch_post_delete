'use strict';
console.log('dummy.js file was loaded');
const appEl = document.getElementById('app');
if (appEl === null) {
  throw 'Nera app el htmle';
}

const urlDummyPosts = 'https://dummyjson.com/posts?limit=10';
fetch(urlDummyPosts)
  .then((resp) => resp.json())
  .then((jsonObj) => {
    // console.log('jsonObj ===', jsonObj.posts);
    const postsArr = jsonObj.posts;
    // console.log(JSON.stringify(postsArr[0], null, 2));
    makePostLiEl(postsArr, appEl);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 *
 * @param {Array} arr
 * @param {HTMLElement} destHtmlEl
 */
function makePostLiEl(arr, destHtmlEl) {
  destHtmlEl.innerHTML = '';
  arr
    .map((postObj) => {
      const liEl = document.createElement('li');
      const aEl = document.createElement('a');
      aEl.href = 'single-post.html?postId=' + postObj.id;
      aEl.textContent = postObj.id + '(id)' + postObj.title;
      liEl.append(aEl);
      console.log('liEl ===', liEl);
      return liEl;
    })
    .forEach((htmlEl) => destHtmlEl.append(htmlEl));
}
