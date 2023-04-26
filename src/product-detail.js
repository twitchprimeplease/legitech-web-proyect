import "/src/Components/detailElement/detailElement.js";
import "/src/Components/dropdown/dropdown.js";
import "/src/Components/header/logiHeader.js";
import "/src/Components/footer/logiFooter.js";

const productContainer = document.querySelector('#products-container');
const searchFilter = document.querySelector('#category-filters');

const url = window.location.search;
const searchParas = new URLSearchParams(url);

let solicitude = searchParas.get("id").replace('"', "");

console.log(solicitude);

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
    console.log(solicitude);
    array.forEach(product => {
        let comparision =product.name.replaceAll(" ", "-")
        if (comparision == solicitude) {
        const productObj = document.createElement('detail-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url[0]);
        productObj.setAttribute('type', product.type);
        productContainer.append(productObj);
    }
    });

}