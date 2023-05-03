class CommentsComponent extends HTMLElement {
    
  
  constructor() {
    const IMG_PATH = "/src/images/cata ima/perfilf.png";
     super();

      
    

      
      
      this.render();
    }

    render() {
        this.innerHTML = `
      
        <link rel="stylesheet" href="../Components/comments/style.css">

        <div id="comments-container">
         
        </div>
      
        <div id="comments-list"></div>



        <form id="comment-form">

        <div class"escribe-tu-comentario">
        <div class="comment-tittle headline">
        <p>Escribe tu comentario</p>
        <div class="profileone">
        <img src="/src/images/cata ima/perfilf.png" width="3%">
                </div> 
                </div>

                <div class ="formularios">
                <div class ="comment-box">
                <div class="comment-name button">
                <p>Nombre:</p>
                <div class="input">
  <label for="name-input"></label> </input>
  <input type="text" id="name-input">
  <br>
  </div>
  <div class ="comment-box-two">
  <div class="comment-opinion button">
  <p>Comentario:</p>
  <textarea id="comment-input"></textarea>
  <br>

                </div></div>
        

  <div class="envio">
  <button type="submit">Enviar</button>
  </envio>
</form>



<div id="comments-container"></div>

    <div class="comment-tittle">
        <h4>Comentarios</h4>

      <div id="comments-list">
        <div class="comment-container">
        <div class="profileone">
            <img src= "/src/images/cata ima/perfilo.png"width="3%>
            </div>
            <div class ="container-info-comm">
          <div class="comment button" data-author="Juan">
            <p>Juan</p>
            <div class="text txt-body"> Excelente producto, lo recomiendo!</div>
          </div>
          </div>

          <div id="comments-list">
          <div class="comment-container">
          <div class="profileone">
              <img src= "/src/images/cata ima/perfilt.png" width="3%>
              </div>
              <div class ="container-info-comm">
            <div class="comment button" data-author="María">
              <p>María</p>
              <div class="text txt-body"> Me encantó, muy buena calidad.</div>
            </div>
            </div>
  
            <div id="comments-list">
            <div class="comment-container">
            <div class="profileone">
                <img src= "/src/images/cata ima/perfiltr.png" width="3%>
                </div>
                <div class ="container-info-comm">
              <div class="comment button" data-author="Pedro">
                <p>Pedro</p>
                <div class="text txt-body">El envío fue rápido y todo llegó en perfectas condiciones.</div>
              </div>
              </div>

         
          



      <script type="module">
        import css from './comments-component.css';
        
        const template = document.querySelector('#comments-template').content;
      
        class CommentsComponent extends HTMLElement {
          constructor() {
            super();
      
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.cloneNode(true));
      
            const commentForm = shadowRoot.querySelector('#comment-form');
            const commentInput = shadowRoot.querySelector('#comment-input');
            const nameInput =  shadowRoot.querySelector('#name-input');
            const commentsContainer = shadowRoot.querySelector('#comments-container');
      
            commentForm.addEventListener('submit', (event) => {
              event.preventDefault();
              const commentText = commentInput.value;
              if (commentText.trim() === '') {
                alert('Debes escribir un comentario');
                return;
              }
              const commentElement = document.createElement('div');
              commentElement.classList.add('comment');

              const headerElement = document.createElement('h4');
              headerElement.textContent = nameText;
              commentElement.appendChild(headerElement);
              
              const imgElement = document.createElement('img');
              imgElement.src = '/src/images/cata ima/perfilf.png';
              commentElement.appendChild(imgElement);

              commentElement.textContent = commentText;
              commentsContainer.appendChild(commentElement);
              commentInput.value = '';
            });
      
            commentsContainer.addEventListener('click', (event) => {
              if (event.target.classList.contains('delete-comment')) {
                event.target.parentElement.remove();
              }
            });

            commentsContainer.appendChild(commentElement);
          }
        }
      
        



        
        
        `;

        const commentsContainer = document.querySelector('#comments-container');
        const commentForm = document.querySelector('#comment-form');
        const nameInput = document.querySelector('#name-input');
        const commentInput = document.querySelector('#comment-input');
        const imgElement = document.createElement("img");


        
        

        commentForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const nameText = nameInput.value.trim();
          const commentText = commentInput.value.trim();
          if (nameText === '' || commentText === '') {
            alert('Debes escribir un nombre y un comentario');
            return;
          }
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          const headerElement = document.createElement('h4');
          headerElement.textContent = nameText;
          commentElement.appendChild(headerElement);
          const textElement = document.createElement('p');
          textElement.textContent = commentText;
          commentElement.appendChild(textElement);
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.classList.add('delete-comment');
          commentElement.appendChild(deleteButton);
          commentsContainer.appendChild(commentElement);
          nameInput.value = '';
          commentInput.value = '';
        });
        
        commentsContainer.addEventListener('click', (event) => {
          if (event.target.classList.contains('delete-comment')) {
            event.target.parentElement.remove();
          }
        });










        
        
/*intento de cata de hacerlo con json en fracaso xd

function loadComments() {
  fetch('comments.json')
    .then(response => response.json())
    .then(data => showComments(data.comments))
    .catch(error => console.error(error));
}

function showComments(comments) {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `
      <h3 class="comment-author">${comment.author}</h3>
      <p class="comment-text">${comment.text}</p>
    `;
    commentsList.appendChild(commentEl);
  });
}

*/
    }
}



customElements.define('comments-component', CommentsComponent);
export default CommentsComponent;