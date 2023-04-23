import './Components/cardElement/cardElement.js';
import './Components/footer/logiFooter.js'
import './Components/filter/filter.js';

const productContainer = document.querySelector('#products-container');
const categorieFilters = document.querySelector('#categories-filters');
const categoryButton = document.querySelectorAll('#categories-filters button');
const collectionFilters = document.querySelector('#collection-filters');

categoryButton.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)));

async function getData(){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();
    organiceData(data);
    } catch (e) {
    console.log(e);
        }
}

function organiceData(array, category){

    let filteredProducts = [];
    productContainer.innerHTML='';
    if((!category || category==='All')){
        filteredProducts = array;
    } else {
        filteredProducts = array.filter(product => product.type === category)
    }

    filteredProducts.forEach(product => {
        const productObj = document.createElement('card-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url[0]);
        productObj.setAttribute('type', product.type);
        productContainer.append(productObj);
        
    });

    const categories = new Set();
    array.forEach(category => {
        categories.add(category.type);
    });
    categories.forEach(category => {
        const filterObj = document.createElement('filter-component');
        filterObj.setAttribute('name',category)
        categorieFilters.append(filterObj);
    });

    const collections = new Set();
    array.forEach(elem => {
        if (elem.collection != "none"){
            collections.add(elem.collection);
        }
    });

    collections.forEach(elem => {
        const filterObj = document.createElement('filter-component');
            filterObj.setAttribute('name',elem)
            collectionFilters.append(filterObj);

    })
}

function setCategory(elem){
    const category = elem.textContent;
    console.log(elem.textContent);
    getData(category)
    }

getData();