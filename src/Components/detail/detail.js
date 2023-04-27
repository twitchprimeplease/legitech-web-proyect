class detailComponent extends HTMLElement{
    constructor (){
        super();
        this.name = this.getAttribute('name');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
            <option value="${this.name}">${this.name}</option>
            <!-- <article class="product">
                <div class = "product-info">
                    <h3 class ="product-name">${this.name}</h3>

                </div>
            </article> -->
        `
    }

}



customElements.define('detail-component', detailComponent);
export default detailComponent;