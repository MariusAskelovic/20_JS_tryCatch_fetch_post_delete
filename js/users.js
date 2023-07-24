'use strict';
console.log('users.js file was loaded');
const ulEl = document.getElementById('ulList');
const sortBtnEl = document.getElementById('sortUsers');

const url5Users = 'https://dummyjson.com/users?limit=5';
fetch(url5Users)
  .then((resp) => resp.json())
  .then((oneObj) => {
    const userObj = oneObj.users;
    console.log('userObj ===', userObj);
    makeUsersLiEl(userObj);
    sortBtnEl.addEventListener('click', () => {
      ulEl.innerHTML = '';
      makeUsersLiEl(usersSortedByName(userObj));
    });
  })
  .catch((error) => console.log(error));

function makeUsersLiEl(arr) {
  console.log('arr ===', arr);
  arr.map((oneUserObj) => {
    const liEl = document.createElement('li');
    const fNameAndLNameEl = document.createElement('h3');
    const genderAndAgeEl = document.createElement('h4');
    const addressEl = document.createElement('p');
    const phoneEL = document.createElement('a');
    const emailEl = document.createElement('a');

    fNameAndLNameEl.textContent = `${oneUserObj.firstName} ${oneUserObj.lastName}`;
    genderAndAgeEl.textContent = `${oneUserObj.gender} is ${oneUserObj.age} years old`;
    addressEl.textContent = `${oneUserObj.address.address}, ${oneUserObj.address.city}`;
    phoneEL.textContent = `${oneUserObj.phone}`;
    phoneEL.href = `tel:${oneUserObj.phone}`;
    emailEl.textContent = `${oneUserObj.email}`;
    emailEl.href = `mailto: ${oneUserObj.email}`;

    liEl.append(fNameAndLNameEl, genderAndAgeEl, addressEl, phoneEL, emailEl);
    console.log('liEl ===', liEl);
    ulEl.append(liEl);
    document.body.append(ulEl);
  });
}

function usersSortedByName(arr) {
  const pushBackUserArr = arr.sort((a, b) => {
    return a.firstName > b.firstName;
  });
  return pushBackUserArr;
}
