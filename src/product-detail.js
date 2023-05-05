import "/src/Components/detailElement/detailElement.js";
import "/src/Components/header/logiHeader.js";
import "/src/Components/footer/logiFooter.js";

const productContainer = document.querySelector('detail-element');

const url = window.location.search;
const searchParas = new URLSearchParams(url);

document.querySelector("#back").addEventListener("click", () => {
    productContainer.backward();
})

document.querySelector("#forward").addEventListener("click", () => {
    productContainer.forward();
})

let solicitude = searchParas.get("id").replace('"', "");


async function getData(){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();
    organiceData(data);
    } catch (e) {
    console.log(e);
        }
}

function organiceData(array){
    array.forEach(product => {
        let comparision =product.name.replaceAll(" ", "-")
        if (comparision == solicitude) {
        const productObj = document.createElement('detail-element');
        productObj.setAttribute('name', product.name);
        productObj.setAttribute('description', product.description);
        productObj.setAttribute('price', product.price);
        productObj.setAttribute('image', product.url.join('$'));
        productObj.setAttribute('color', product.colors.join('$'));
        productObj.setAttribute('type', product.type);
        productObj.setAttribute('current', 0);
        productContainer.append(productObj);
    }
    });

}

getData()