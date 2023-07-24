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
      // ==== sukurti delete mygtuka
      const delBtn = document.createElement('button');
      // prideti del mygtukui data-postId = id
      delBtn.dataset.postId = postObj.id;
      delBtn.textContent = 'X';
      // prideti argumenta deletePostServer()
      // tai as paverciu i arrow
      delBtn.addEventListener('click', () => deletePostServer(postObj.id));
      // ideti i li elementa
      // uzdeti mygtukui funkcija deletePost()

      liEl.append(aEl, ' ', delBtn);
      console.log('liEl ===', liEl);
      return liEl;
    })
    .forEach((htmlEl) => destHtmlEl.append(htmlEl));
}

function deletePostServer(idToDelete) {
  console.log('delete me ', idToDelete);
  fetch(`https://dummyjson.com/posts/${idToDelete}`, {
    method: 'DELETE',
  })
    .then((resp) => {
      // log resp
      return resp.json();
    })
    .then((ats) => {
      //   console.log('ats ===', ats);
      // trinti lokaliai
      localDelete(idToDelete);
    })
    .catch((error) => console.log(error));
}

function localDelete(idToDelete) {
  const foundBtn = document.querySelector(`[data-post-id='${idToDelete}']`);
  //   console.log('found ===', foundBtn);
  foundBtn.parentElement.remove();
}

const url5Users = 'https://dummyjson.com/users?limit=5';
fetch(url5Users)
  .then((resp) => resp.json())
  .then((userObj) => console.log('users === ', userObj.users))
  .catch((error) => console.log(error));
