'use strict';
console.log('single-post.js file was loaded');

const els = {
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  tags: document.getElementById('tags'),
};

console.log('els ===', els);
// paimti url parametra pavadinimu postId reiksme
const params = new URLSearchParams(window.location.search);
console.log('params ===', params);
// ir ja isspausdinti
console.log(params.get('postId'));

// parsiusti konkretu posta pagal id
const currentPostId = params.get('postId');
const urlDummyPosts = 'https://dummyjson.com/posts/' + currentPostId;
fetch(urlDummyPosts)
  .then((resp) => resp.json())
  .then((jsonObj) => {
    console.log(jsonObj);
    postObjToHtml(jsonObj);
  })
  .catch((error) => {
    console.log(error);
  });

function postObjToHtml(pObj) {
  els.title.textContent = pObj.title;
  els.body.textContent = pObj.body;
  const tagsLiArr = tagsToEls(pObj.tags);
  els.tags.innerHTML = '';
  //   tagsLiArr.forEach((liEl) => els.tags.append(liEl));
  els.tags.append(...tagsLiArr); // galimas ir toks, trumpesnis su spread (...)
}

function tagsToEls(tagsStringArr) {
  const elArr = tagsStringArr.map((tagString) => {
    const liEl = document.createElement('li');
    liEl.textContent = tagString;
    liEl.className = 'column';
    return liEl;
  });
  return elArr;
}
