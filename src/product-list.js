import './Components/cardElement/cardElement.js';
import './Components/footer/logiFooter.js'
import './Components/filter/filter.js';
import './Components/alternativeFilter/alternativeFilter.js'
import "./Components/header/logiHeader.js";

let products = []

const productContainer = document.querySelector('#products-container');
const categoryButton = document.querySelectorAll('#categories-filters button');
const searchFilter = document.querySelector('#search-filters');

categoryButton.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)));


async function getData(){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();
    data.forEach(element => {
        products.push(element)
    });
    iniciatePage(products)

    } catch (e) {
    console.log(e);
    }
}

function organiceData(array, filterType){

    let filteredProducts = [];
    productContainer.innerHTML='';

    if((!filterType || filterType==='All')){
        filteredProducts = array;
        } else if(Object.keys(filterType)[0]==='category') {
            filteredProducts = array.filter(product => product.type === Object.values(filterType)[0]);
        } else if(Object.keys(filterType)[0]==='collection'){
            filteredProducts = array.filter(product => product.collection === Object.values(filterType)[0]);
    }
    
    filteredProducts.forEach(product => {

        let name = product.name.replaceAll(" ", "-");
        console.log(name);
        let url = "/src/product-detail/index.html?id=" + name;
        const productObj = document.createElement('card-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url[0]);
        productObj.setAttribute('type', product.type);
        const enlace = document.createElement('a')
        enlace.href = url;
        enlace.innerHTML = product.name;
        console.log(enlace)
        productContainer.append(productObj);
        productContainer.appendChild(enlace);
        
    });
    

}

function organiceCategories(array){

    const alternativeFilters = document.createElement('alternative-filter');
    alternativeFilters.array = array;
    searchFilter.append(alternativeFilters);

}


function iniciatePage(array){
    organiceData(array);
    organiceCategories(array);
}


getData();


