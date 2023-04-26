class detailElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image', 'price','type']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="/src/Components/detailElement/style.css">
            <article class="product">
                <div class="image-container">
                        <img class= "product-img" src= ${this.image} alt="">
                </div>
                <div class="type-container">
                    <h5 class="product-type">${this.type}</h5>
                </div>
                <div class = "product-info">
                    <h3 class ="product-name">${this.name}</h4>
                    <div class="product-description">
                        <p>${this.description}</p>
                    </div>
                    <h4>${this.price}</h4>
                </div>
                <button class ="btn-primary" href="/${this.name}"">BUY NOW</button> <!-- Aqui debe dirigir hacia un producto -->
            </article>
        `
    }
}

customElements.define('detail-element', detailElement);
export default detailElement;