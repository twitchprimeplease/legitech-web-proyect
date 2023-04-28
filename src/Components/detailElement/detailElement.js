class detailElement extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.price = this.getAttribute('price');
        this.type = this.getAttribute('type');
        this.image0 =this.getAttribute('image0');
        this.color0 = this.getAttribute('color0');
        this.image1 =this.getAttribute('image1');
        this.color1 = this.getAttribute('color1');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'description', 'image0', 'price','type','color0','image1',"color1"]
    }

    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();

    }

    render(){
        this.innerHTML = `
        <link rel="stylesheet" href="/src/Components/detailElement/style.css">
            <article class="product">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                    <img class="img1" id="img1" src= ${this.image0} alt="">
                    <img class="img2" id="img2" src= ${this.image1} alt="">
                    </div>
                    <div class="cont-arti col-md-5 align-items-center">
                    <h5 class="button product-type">${this.type}</h5>
                    <div class = "product-info">
                    <h3 class ="title-1 product-name">${this.name}</h4>
                    <div class="product-description">
                        <p class="txt-body">${this.description}</p>
                    </div>
                    <button type="button" id="color1-btn" class="button" href="/${this.colors}"></button>
                    <button type="button" id="color2-btn" class="button" href="/${this.colors}"></button>
                    <h4 class="headline price">${this.price}</h4>
                </div>
                <button type="button" id="add-cart-btn" class="btn-primary button" href="/${this.name}">ADD TO CART</button>
                    </div>
                </div>
             </div>
            </article>
           `
    }
}

customElements.define('detail-element', detailElement);
export default detailElement;