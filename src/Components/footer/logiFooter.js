class logiFooter extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/Components/footer/logiFooterStyles.css">
            <div class="logi-footer">
                <footer class="py-5">
                    <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>About</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Web privacy policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Investors</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Press</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Accessibility</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Contact</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Product privacy policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms of use</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">E-mail preferences</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Careers</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cookies Settings</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sustainability</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Refurbished products</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                        <h5>Do you want to optain special offers in the newest tecnology?</h5>
                        <p>Let us keep you updated!</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 Logitech, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                    </ul>
                    </div>
                </footer>
                </div>
        `;
    }
}

customElements.define('logi-footer', logiFooter);
export default logiFooter;