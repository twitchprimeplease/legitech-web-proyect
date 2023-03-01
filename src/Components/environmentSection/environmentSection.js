class environmentSection extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        
        `;
    }
}
customElements.define('environment-section', environmentSection);
export default environmentSection;