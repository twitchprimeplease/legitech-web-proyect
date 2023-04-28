import "/src/Components/detailElement/detailElement.js";
<<<<<<< HEAD
import "/src/Components/detail/detail.js";
import "/src/Components/cardElement/cardElement.js";
=======
>>>>>>> 5375cb33ffb6b4152703ca0e738f660b37fd5d69
import "/src/Components/header/logiHeader.js";
import "/src/Components/footer/logiFooter.js";
import "/src/Components/comments/comments.js";

const productContainer = document.querySelector('#products-container');
const commentsContainer=document.getElementById("comments-container");
const searchFilter = document.querySelector('#category-filters');

const url = window.location.search;
const searchParas = new URLSearchParams(url);

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
        productObj.setAttribute('image0', product.url[0]);
        productObj.setAttribute('image1', product.url[1]);
        productObj.setAttribute('color0', product.colors[0]);
        productObj.setAttribute('color1', product.colors[1]);
        productObj.setAttribute('type', product.type);
        productContainer.append(productObj);
    }
    });

commentsContainer.innerHTML=`<comments-component> </comments-component>`

}

getData()


/*
const commentsContenedor = document.getElementById("comments-container");


/cataaa

const commentsContainer = document.querySelector('#comments-container');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText.trim() === '') {
    alert('Debes escribir un comentario');
    return;
  }
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.textContent = commentText;
  commentsContainer.appendChild(commentElement);
  commentInput.value = '';
});

commentsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-comment')) {
    event.target.parentElement.remove();
  }
}); 

*/