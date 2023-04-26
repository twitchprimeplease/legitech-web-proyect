
class AlternativeFilter extends HTMLElement{ 
    constructor(){
        super();
        this.array=[
            {"category": "Fades Away", "collection":"Villains"},
            {"category": "Heros", "collection":"Other"},
        ];
        this.aditionalFuntion= ()=>{console.log("Nada por aqui, nada por alla, levanta la mano y HAZ ESTA M")}
    }


    connectedCallback(){
        this.render();
    }

    render(){
        
        this.innerHTML = `
                <link rel="stylesheet" href="/src/Components/alternativeFilter/styles.css">
                <nav class="filter-list">
                        <ul class="list">

                        <li class="list-item">
                            <div class="list-button">
                                
                                <button class ="btn-primary" >CATEGORY</button>
                                
                            </div>

                            <ul id="category-list-component" class="list-show">
                            </ul>

                        </li>

                        <li class="list-item">
                            <div class="list-button">
                                <button class ="btn-primary" ">COLLECTION</button>

                            </div>

                            <ul id="collection-list-component"class="list-show">
                            </ul>

                        </li>

                    </ul>
                </nav>
            `
            
            this.createListElements(this.array);
            this.dropdownMenu();
            

        }

    dropdownMenu(){

        let listElements = document.querySelectorAll('.list-button');
        listElements.forEach(listElement => {
            listElement.addEventListener('click', ()=>{                
                listElement.classList.toggle('arrow');            
                let height = 0;
                let menu = listElement.nextElementSibling;
                if(menu.clientHeight == "0"){
                    height=menu.scrollHeight;
                }
            
                menu.style.height = `${height}px`;
            })
        });
    }

    createListElements(array){

        const categoryListFilter= document.querySelector('#category-list-component')
        const collectionListFilter= document.querySelector('#collection-list-component')

        const categories = new Set();
        array.forEach(category => {
        categories.add(category.type);
        });

        console.log(categories);
        categories.forEach(category => {
        const filterObj = document.createElement('filter-component');
        filterObj.setAttribute('name',category)
        filterObj.addEventListener("click", () =>{
            console.log(category);
        })
        categoryListFilter.append(filterObj);
        // let content;
        // let li = document.createElement("li");
        // li.className +="final-filter"
        // let p = document.createElement("p");
        // content = category;
        // p.appendChild(document.createTextNode(content));
        // categoryListFilter.appendChild(li).appendChild(p);
    

    });

    const collections = new Set();
    array.forEach(elem => {
        if (elem.collection != "none"){
            collections.add(elem.collection);
        }
    });

    console.log(collections);

    collections.forEach(elem => {
        const filterObj = document.createElement('filter-component');
            filterObj.setAttribute('name',elem);
            filterObj.addEventListener("click", () =>{
                console.log(elem);
            })
            collectionListFilter.append(filterObj);
                    // let content;
        // let li = document.createElement("li");
        // let p = document.createElement("p");
        // li.className +="final-filter"
        // content = elem;
        // p.appendChild(document.createTextNode(content));
        // collectionListFilter.appendChild(li).appendChild(p);
    })
    }

}

customElements.define('alternative-filter', AlternativeFilter);
export default AlternativeFilter;