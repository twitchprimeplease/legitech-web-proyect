class dropdown extends HTMLElement{
    constructor(){
        super();
        this.categories = [];
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/Components/dropdown/dropdown.js">
        <div class="d-flex gap-5 justify-content-center">
        <div class="dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px">
            <form class="p-2 mb-2 bg-light border-bottom">
            <input type="search" class="form-control" autocomplete="false" placeholder="Type to filter...">
            </form>
            <ul class="list-unstyled mb-0">
            <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span class="d-inline-block bg-success rounded-circle p-1"></span>
                Action
            </a></li>
            <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span class="d-inline-block bg-primary rounded-circle p-1"></span>
                Another action
            </a></li>
            <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span class="d-inline-block bg-danger rounded-circle p-1"></span>
                Something else here
            </a></li>
            <li><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                <span class="d-inline-block bg-info rounded-circle p-1"></span>
                Separated link
            </a></li>
            </ul>
        </div>
        `
    }
}