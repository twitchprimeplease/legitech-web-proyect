class filterComponent extends HTMLElement{
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
            <link rel="stylesheet" href="/src/Components/filter/styles.css">
            <button type="button" class="btn-primary">${this.name}</button>
        `
    }


    // render() {
        
    //     this.innerHTML = `
    //         
    //     <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    //     <label for="filters"></label>
    //     <select name="filters" id="filters">
    //         <option value="free">Free</option>
    //         <option value="bronze">Bronze</option>
    //         <option value="silver" selected>Silver</option>
    //         <option value="gold">Gold</option>
    //     </select>
    //     </div>
    //     `
    // }

}



customElements.define('filter-component', filterComponent);
export default filterComponent;