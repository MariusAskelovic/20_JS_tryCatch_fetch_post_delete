'use strict';
console.log('shop.js file was loaded');
const productsDivEl = document.getElementById('products');

const urlProd = 'https://dummyjson.com/products';
fetch(urlProd)
  .then((resp) => resp.json())
  .then((data) => {
    const prodObj = data.products;
    // console.log('prodObj ===', prodObj);
    getProducts(prodObj);
  });

function getProducts(arr) {
  arr.map((oneProd) => {
    const oneProductDiv = document.createElement('div');
    oneProductDiv.style.border = '2px solid black';
    oneProductDiv.style.padding = '15px';

    const idEl = document.createElement('p');
    const titleEl = document.createElement('h4');
    const priceEl = document.createElement('h5');
    const discPercEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const stockEl = document.createElement('p');
    const brandEl = document.createElement('p');
    const categEl = document.createElement('p');
    const thumbEl = document.createElement('p');

    idEl.textContent = oneProd.id;
    titleEl.textContent = oneProd.title;
    priceEl.textContent = oneProd.price;
    discPercEl.textContent = oneProd.discountPercentage;
    ratingEl.textContent = oneProd.rating;
    stockEl.textContent = oneProd.stock;
    brandEl.textContent = oneProd.brand;
    categEl.textContent = oneProd.categoty;
    thumbEl.textContent = oneProd.thumbnail;

    oneProductDiv.append(
      idEl,
      titleEl,
      priceEl,
      discPercEl,
      ratingEl,
      stockEl,
      brandEl,
      categEl,
      thumbEl
    );
    productsDivEl.append(oneProductDiv);
  });
}
