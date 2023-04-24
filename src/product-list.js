import './Components/cardElement/cardElement.js';
import './Components/footer/logiFooter.js'
import './Components/dropdown/dropdown.js';

const productContainer = document.querySelector('#products-container');
const searchFilter = document.querySelector('#category-filters');


async function getData(){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();+
    organiceData(data);
    } catch (e) {
    console.log(e);
        }
}

console.log(getData());
// fetch('https://apimocha.com/json-logitech-s8/all-products')
// .then(response => response.json())
// .then(data => console.log(data));


function organiceData(array){
    console.log(array);
    array.forEach(product => {
        const productObj = document.createElement('card-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url[0]);
        productObj.setAttribute('type', product.type);
        productContainer.append(productObj);
        
    });

    // const categories = new Set();
    // array.forEach(category => {
    //     categories.add(category.type);
    // });
    // categories.forEach(category => {
    //     const filterObj = document.createElement('option');
    //     filterObj.setAttribute('value',category)
    //     filterObj.append(searchFilter);
    //     console.log(filterObj);
    // });

    // console.log(categories);
}

// function createCategories(array){
//     // console.log(array);
//     const categories = new Set();
//     const filterObj = document.createElement('dropdown-component');
//     array.forEach(category => {
//         categories.add(category.type);
//     });
//     filterObj.setAttribute('name',"Intention")
//     filterObj.append(searchFilter);
//     console.log(categories);

// };