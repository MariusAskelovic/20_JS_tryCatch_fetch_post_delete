'use strict';
console.log('tryCatch.js file was loaded');

try {
  const appEl = document.getElementById('app');
  if (appEl === null) {
    throw 'Nera app el htmle';
  }
  console.log('appEl ===', appEl);
  appEl.textContent = 'kazka';
} catch (error) {
  console.log('error ===', error);
  alert('pasitikrinti ar yra app el htmle');
}
